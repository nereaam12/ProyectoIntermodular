<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/users', name: 'api_users_')]
class RegistrationController extends AbstractController
{
    #[Route('', name: 'create', methods: ['POST'])]
    public function create(
        Request                     $request,
        EntityManagerInterface      $em,
        UserPasswordHasherInterface $passwordHasher
    ): JsonResponse
    {

        $data = json_decode($request->getContent(), true);
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;
        $name = $data['name'] ?? '';
        $surname = $data['surname'] ?? '';
        $telephone = $data['telephone'] ?? '';

        try {

            if (!$email || !$password) {
                return new JsonResponse([
                    'error' => 'Email and password are required'
                ], 400);
            }

            $user = new User();
            $user->setEmail($email);

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $password
            );

            $user->setPassword($hashedPassword);
            $user->setTelephone($telephone);
            $user->setName($name);
            $user->setSurname($surname);

            $em->persist($user);
            $em->flush();

            return new JsonResponse([
                'message' => 'User created successfully'
            ], 201);

        } catch (UniqueConstraintViolationException $e) {

            return new JsonResponse([
                'error' => 'This email is already registered'
            ], 409);

        } catch (\Exception $e) {

            return new JsonResponse([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
