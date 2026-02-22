<?php

namespace App\Controller;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/projects', name: 'api_projects_')]
class ApiCasasController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        $projects = $em->getRepository(Project::class)->findAll();
        $data = [];

        foreach ($projects as $project) {
            $data[] = [
                'title' => $project->getTitle(),
                'description' => $project->getDescription(),
                'image' => $project->getImage(),
                'pdfPath' => $project->getPdfPath(),
                'user' => [
                    'id' => $project->getUser()->getId(),
                    'name' => $project->getUser()->getName(),
                    'surname' => $project->getUser()->getSurname(),
                    'email' => $project->getUser()->getEmail(),
                    'telephone' => $project->getUser()->getTelephone(),

                ],
                'location' => $project->getLocation(),
                'year' => $project->getYear(),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/{id}', methods: ['GET'], name: 'show')]
    public function show(Project $project): JsonResponse
    {
        $data = [
            'id' => $project->getId(),
            'title' => $project->getTitle(),
            'description' => $project->getDescription(),
            'image' => $project->getImage(),
        ];

        return new JsonResponse($data);
    }

    #[Route('', methods: ['POST'], name: 'create')]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $project = new Project();
        $project->setTitle($data['title']);
        $project->setDescription($data['description']);
        $project->setImage($data['image']);


        $em->persist($project);
        $em->flush();

        return new JsonResponse(['status' => 'Project created'], 201);
    }

    #[Route('/{id}', methods: ['PUT', 'PATCH'], name: 'update')]
    public function update(Request $request, Project $project, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (isset($data['title'])) {
            $project->setTitle($data['title']);
        }
        if (isset($data['description'])) {
            $project->setDescription($data['description']);
        }
        if (isset($data['image'])) {
            $project->setImage($data['image']);
        }

        $em->flush();

        return new JsonResponse(['status' => 'Project updated']);
    }

    #[Route('/{id}', methods: ['DELETE'], name: 'delete')]
    public function delete(Project $project, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($project);
        $em->flush();

        return new JsonResponse(['status' => 'Student deleted']);
    }
}
