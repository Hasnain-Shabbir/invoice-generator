import { InvoicePreview, InvoiceForm } from './templates';

function App() {
  return (
    <div className="grid grid-cols-2 gap-6 p-10">
      <InvoiceForm />
      <InvoicePreview />
    </div>
  );
}

export default App;
