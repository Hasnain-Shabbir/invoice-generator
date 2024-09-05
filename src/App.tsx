import { ToastContainer } from 'react-toastify';
import { Container, Header } from './components';
import { InvoicePreview, InvoiceForm } from './templates';

function App() {
  return (
    <>
      <ToastContainer />
      <div className="pb-10">
        <Header />
        <Container>
          <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            <InvoiceForm />
            <InvoicePreview />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
