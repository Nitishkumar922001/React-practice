import { useRef, useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../Hooks/use-http';

const NewTask = (props) => {
let task;
  
  function applyData(data)
    {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: task};

      props.onAddTask(createdTask);
    }

  const {isLoading,error,sendReq:addTask}= useHttp(applyData);


  const enterTaskHandler =(taskText) => {

  addTask({url:'https://howtosendhttpreq-default-rtdb.firebaseio.com/tasks.json', method: 'POST',
    body: JSON.stringify({ text: taskText }),
    headers: {
      'Content-Type': 'application/json',
    },})
task=taskText;
    }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
  
};

export default NewTask;
