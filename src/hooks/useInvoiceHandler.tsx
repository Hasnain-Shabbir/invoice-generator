import { useCallback } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { ToastNotification } from '../components';
import { prepareInvoiceInput } from '../graphql/services/invoiceService';
import CREATE_INVOICE from '../graphql/mutations/createInvoice';
import { InvoiceState } from '../types';

export const useInvoiceHandler = (
  formMethods: UseFormReturn<InvoiceState>,
  mutationUniqueId: string,
) => {
  const { handleSubmit, reset } = formMethods;
  const [createInvoice, { loading }] = useMutation(CREATE_INVOICE);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  const onFormSubmit: SubmitHandler<InvoiceState> = useCallback(
    async data => {
      try {
        const input = prepareInvoiceInput(data, mutationUniqueId);
        const result = await createInvoice({ variables: { input } });

        toast.success(
          <ToastNotification
            message="Your invoice has been created."
            title="Invoice created successfully!"
          />,
          { icon: false },
        );

        handleReset();
        console.log('Invoice created:', result);
      } catch (err) {
        if (err instanceof Error) {
          toast.error(
            <ToastNotification
              message="There was an error creating the invoice"
              title="Invoice Creation Error!"
            />,
            { icon: false },
          );
          handleReset();
          console.error('Error creating Invoice', err);
        }
      }
    },
    [createInvoice, mutationUniqueId, handleReset],
  );

  return { handleSubmit, onFormSubmit, handleReset, loading };
};
