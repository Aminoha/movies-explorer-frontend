import React from 'react';
import './AboutProject.css';

const AboutProject = (props) => {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__block'>
          <h3 className='about-project__topic'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__descr'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className='about-project__block'>
          <h3 className='about-project__topic'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__descr'>
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__status'>
        <p className='about-project__schedule'>1 неделя</p>
        <p className='about-project__schedule about-project__schedule_backend'>
          4 недели
        </p>
        <span className='about-project__span'>Back-end</span>
        <span className='about-project__span'>Front-end</span>
      </div>
    </section>
  );
};

export default AboutProject;
