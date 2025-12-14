'use client';

import React,{useState} from 'react'
function page() {
    const[num,setnum] = useState(0)
    const[nam, valnam] = useState("")

    const[show, setshow] = useState(false)

    const[ischecked, setischecked]= useState(false)
    const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);}
    {/*email page */}
     const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
    {/*quotes */}

  const quotes = [
    "The best time to start was yesterday.",
    "Keep going. Everything you need will come to you.",
    "Work hard in silence.",
    "You miss 100% of the shots you don’t take.",
    "good things take time",
    "when the trees lost their leaves then they were still stand with roken heart and smilling face ",
  ];

  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };
  {/*timmer app */}
  /*const [time, setTime] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && time > 0) {
      const interval = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [running, time]);

  const reset = () => {
    setRunning(false);
    setTime(10);
  };*/
  return (
    <div>
      <p>number:-{num}</p>
      <button onClick={() => setnum(num+1)}>onclick</button>
      <button onClick={() => setnum(0)}>reset</button>
      <h1>write you're name:-{nam}</h1>
      <input type='text'
      value={nam}
      onChange={e => valnam(e.target.value)}></input><br/>

      <button onClick={() => setshow(!show)}>{show? 'hide': 'show'}</button>
      {show && <p>This is a toggled message!</p>}
{ /* checkbox*/}    
  <div>
    <label>
<input type='checkbox'
checked={ischecked}
onChange={e => setischecked(e.target.checked)}/>{ischecked? 'clicked' :'cick'}</label>
{ischecked && <p>this is checked</p>}

      </div>
{/*show list */}
       <div>

      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>


{/*email page */} 
      <div>
      {step === 1 && (
        <>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <button onClick={handlePrev}>Back</button>
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {step === 3 && (
        <>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <button onClick={handlePrev}>Back</button>
          <button onClick={() => alert('Submitted!')}>Submit</button>
        </>
      )}
    </div>
    {/*quotes */}
     <div>
      <button onClick={getRandomQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
      {/*timmer app 

    <div>
      <h2>{time}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>*/}
    </div>
  )
}

export default page;

