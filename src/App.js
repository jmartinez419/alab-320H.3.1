import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



export default function App() {

  const [learnerData, setLearnerData] = useState([
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ])
  

  let data = learnerData[0]
  let score = data.scores[0]
  let data2 = learnerData[1]
  let score2 = data2.scores[1]
  let data3 = learnerData[2]
  let score3 = data3.scores[2]
  return (
    <div>
   <h1>{data.name}</h1>
   <p>bio: {data.bio}<br/>
   score: {score.score}<br/>
   date: {score.date}
   </p>
   <h1>{data2.name}</h1>
   <p>bio: {data2.bio}<br/>
   score: {score2.score}<br/>
   date: {score2.date}
   </p>
   <h1>{data3.name}</h1>
   <p>bio: {data3.bio}<br/>
   score: {score3.score}<br/>
   date: {score3.date}
   </p>
    </div>
  );
}

