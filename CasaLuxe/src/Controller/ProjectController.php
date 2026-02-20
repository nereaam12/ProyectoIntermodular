<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\ProjectType;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/project')]
final class ProjectController extends AbstractController
{
    #[Route(name: 'app_project_index', methods: ['GET'])]
    public function index(ProjectRepository $projectRepository): Response
    {
        return $this->render('project/index.html.twig', [
            'projects' => $projectRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_project_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $project = new Project();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Manejo del archivo
            /** @var UploadedFile $image */
            $image = $form->get('image')->getData();

            if ($image) {
                $newFilename = uniqid() . '.' . $image->guessExtension();
                try {
                    $image  ->move(
                        $this->getParameter('uploads_directory'), // definido en services.yaml
                        $newFilename
                    );
                } catch (\Exception $e) {
                    // Manejar error si ocurre
                }
                $project->setImage($newFilename);
            }
            // ===== PDF (añadido nuevo) =====
            /** @var UploadedFile $pdf */
            $pdf = $form->get('pdfFile')->getData();

            if ($pdf) {
                $newPdfFilename = uniqid() . '.' . $pdf->guessExtension();
                try {
                    $pdf->move(
                        $this->getParameter('uploads_directory'),
                        $newPdfFilename
                    );
                } catch (\Exception $e) {
                }
                $project->setPdfPath($newPdfFilename); // 👈 AQUÍ el cambio
            }

            $entityManager->persist($project);
            $entityManager->flush();

            return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('project/new.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'app_project_show', methods: ['GET'])]
    public function show(Project $project): Response
    {
        return $this->render('project/show.html.twig', [
            'project' => $project,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_project_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Project $project, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // ===== PDF =====
            /** @var UploadedFile $pdf */
            $pdf = $form->get('pdfFile')->getData();

            if ($pdf) {
                $newPdfFilename = uniqid() . '.' . $pdf->guessExtension();
                try {
                    $pdf->move(
                        $this->getParameter('uploads_directory'),
                        $newPdfFilename
                    );
                } catch (\Exception $e) {
                }
                $project->setPdfPath($newPdfFilename);
            }
            $entityManager->flush();

            return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('project/edit.html.twig', [
            'project' => $project,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_project_delete', methods: ['POST'])]
    public function delete(Request $request, Project $project, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$project->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($project);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
    }
}
