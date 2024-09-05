import { FC, useContext, useId } from 'react';
import { Button, Container, Divider } from '..';
import { InvoiceContext } from '../../context/InvoiceContext';
import { Logo } from '../../assets';
import { useInvoiceHandler } from '../../hooks/useInvoiceHandler';

const Header: FC = () => {
  const mutationUniqueId = useId();
  const { formMethods } = useContext(InvoiceContext);
  const { handleSubmit, onFormSubmit, handleReset, loading } =
    useInvoiceHandler(formMethods, mutationUniqueId);

  return (
    <header>
      <div className="flex items-center justify-center p-5">
        <Logo />
      </div>
      <Divider />
      <div className="py-6 pb-8">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-medium">New Invoice</h1>
              <p className="text-secondary-100">
                Create new invoice for your customers
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 xs:flex-row">
              <Button onClick={handleReset} variant="outlined">
                Reset
              </Button>
              <Button onClick={handleSubmit(onFormSubmit)}>
                {loading ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
