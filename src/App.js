import './custom.css';

import FormLogin from './components/FormLogin';

function App() {
  return (
    <main className='mainBg'>
      <section className='container'>
        <div className='formLogin p-3 pb-5'>
            
            <FormLogin />
        </div>
      </section>
    </main>
  );
}

export default App;
