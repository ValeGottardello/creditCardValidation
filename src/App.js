import './App.css';
import PaymentValidation from "./components/PaymentValidation";

function App() {
  return (
    <div className="App bg-slate-300 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-h-screen flex flex-col justify-between" >
      <header className='bg-slate-100 text-center'>
        <h1 className=' text-slate-900 dark:text-white text-2xl font-medium tracking-tight '>Credit Card Verifier App</h1>
      </header>
      <h2 className='text-slate-900 text-center dark:text-white mt-5 mb-5 font-medium tracking-tight'>Check your credit number are valid to make a successfull payment.</h2>
      <PaymentValidation />
      <aside className='text-center'>
        <p className='text-red-700 dark:text-white mt-5 mb-5 text-base font-medium tracking-tight'>Note: This is an app for a learning project to apply new technologies. Please do not enter realpersonal data.</p>
      </aside>
      <footer>
        <h5 className='text-center mt-5'>&copy; ValentinaGott 2023</h5>
        <p className='text-center mt-5'>App built using <span className='text-violet-800'>Taiwlwind.CSS & React.Js</span></p>
        <div>
          <ul className='flex justify-around mt-5'>
            <li><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'>Email</a></li>
            <li><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
