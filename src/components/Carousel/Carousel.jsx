/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Carousel.css';
import WeslleySantos from '../../images/weslley-santos.jfif';

const Carousel = () => {
  return (
    <section>
      <div className="left-side-carousel">
        <span className="color-green">
          {'< '}
        </span>
        <h2>
         Seja bem-vindo ou bem-vinda ao meu portfólio!
        </h2>
        <span className="color-green">
          {' >'}
        </span>
      </div>
      <div className="right-side-carousel">
        <img src={ WeslleySantos } alt="weslley santos" />
        <div>
        <h2><a name="home">Sobre mim</a></h2>
        <p>
          Olá! Me chamo Weslley Almerindo dos Santos e sou estudante de Desenvolvimento Web na Turma XP da 
          <a href="https://betrybe.com"> Trybe</a>.
        </p>
        <p>
          Apesar de amar a <strong>tecnologia</strong> desde a infância, desisti de estudar computação no ensino médio. 
          Pensava que o curso era muito complicado e que eu não me adaptaria.
        </p>
        <p>
          Então, me tornei um <strong>vestibulando de Medicina</strong> e cheguei a estudar 2 semestres de Medicina Veterinária como 
          bolsista integral. Eis que surgiu a oportunidade de realizar o processo seletivo para a <strong>Turma XP</strong> na Trybe.
        </p>
        <p>
          Entre milhares de pessoas, fui escolhido para ter a honra de fazer parte desta turma incrível. Hoje, estou
          no módulo de Back-End.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
