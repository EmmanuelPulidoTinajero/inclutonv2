import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';

const summitFormSchema = z.object({
  fullName: z.string().min(3, 'El nombre completo es requerido'),
  email: z.string().email('Email inválido'),
  organization: z.string().optional(),
  role: z.string().optional(),
  interests: z.array(z.string()).optional()
});

type SummitFormData = z.infer<typeof summitFormSchema>;

const interestOptions = [
  { value: 'accessibility', label: 'Accesibilidad Digital' },
  { value: 'inclusive-design', label: 'Diseño Inclusivo' },
  { value: 'assistive-tech', label: 'Teclsxologías Asistivas' },
  { value: 'ai-inclusion', label: 'IA Inclusiva' }
];

export function SummitRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<SummitFormData>({
    resolver: zodResolver(summitFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      organization: '',
      role: '',
      interests: []
    }
  });

  const onSubmit = async (data: SummitFormData) => {
    setIsSubmitting(true);
    setError(undefined);

    try {
      // TODO: Implement API call
      console.log('Form data:', data);
      setSuccess(true);
    } catch (_err) {
      setError('Hubo un error al procesar tu registro. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
        <FormWrapper
            title="¡Registro Exitoso!"
            description="Gracias por registrarte en la Cumbre de Inclusión Teclsxológica"
            success="Te hemos enviado un email con la confirmación y detalles adicionales."
        >
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Pronto recibirás más información sobre el evento.
            </p>
            <Button
                onClick={() => {
                  window.location.href = '/';
                }}
                className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
            >
              Volver al inicio
            </Button>
          </div>
        </FormWrapper>
    );
  }

  return (
      <FormWrapper
          title="Registro para la Cumbre Teclsxológica"
          description="Únete a este evento único de aprendizaje y networking"
          error={error}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                name="fullName"
                label="Nombre completo"
                placeholder="Tu nombre y apellido"
                required
            />

            <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="tu@email.com"
                required
            />

            <FormField
                name="organization"
                label="Organización"
                placeholder="Empresa o institución (opcional)"
            />

            <FormField
                name="role"
                label="Cargo o profesión"
                placeholder="Tu rol o cargo (opcional)"
            />

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
            >
              {isSubmitting ? 'Procesando...' : 'Confirmar asistencia'}
            </Button>
          </form>
        </FormProvider>
      </FormWrapper>
  );
}