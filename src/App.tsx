import { Container, Header } from './components';
import { InvoicePreview, InvoiceForm } from './templates';

function App() {
  return (
    <div className="pb-10">
      <Header />
      <Container>
        <div className="grid grid-cols-2 gap-6">
          <InvoiceForm />
          <InvoicePreview />
        </div>
      </Container>
    </div>
  );
}

export default App;
