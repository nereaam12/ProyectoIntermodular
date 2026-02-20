<?php

namespace App\Form;

use App\Entity\Project;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('image', FileType::class, [
                'label' => 'Imagen',
                'mapped' => false,       // no se guarda automáticamente
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => ['image/jpeg','image/png','image/gif'],
                        'mimeTypesMessage' => 'Por favor sube una imagen válida',
                    ])
                ],
            ])
        ->add('pdfFile', FileType::class, [
        'label' => 'Subir PDF',
        'mapped' => false, // 🔥 IMPORTANTE
        'required' => false,
        'constraints' => [
            new File([
                'maxSize' => '5M',
                'mimeTypes' => [
                    'application/pdf',
                ],
                'mimeTypesMessage' => 'Por favor sube un PDF válido',
            ])
        ],
    ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
