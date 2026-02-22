<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
public function login(Request $request, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): JsonResponse
{
    $data = json_decode($request->getContent(), true);
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    $user = $userRepository->findOneBy(['email' => $email]);
    if (!$user) {
        return new JsonResponse(['error' => 'Invalid credentials'], 401);
    }

    if (!$passwordHasher->isPasswordValid($user, $password)) {
        return new JsonResponse(['error' => 'Invalid credentials'], 401);
    }

    // Aquí generas token JWT si quieres, o devuelves un mensaje simple
    return new JsonResponse([
        'message' => 'Login successful',
        'user' => [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'name' => $user->getName(),
        ]
    ]);
}

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): RedirectResponse
    {
        $response = new RedirectResponse('http://localhost:4200');
        $response->headers->clearCookie('BEARER', '/', null, false, false, false, 'Lax');

        return $response;
    }
}
