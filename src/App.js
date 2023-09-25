import './App.scss';
import { useState } from 'react';
import smirk from '../src/assets/images/bad-yellow.png'
import slogann from '../src/assets/images/yellow bad 1.png'


function App() {
  return (
     <main>
      <header>
        <img src={smirk} />
        <img src={slogann}/>
      </header>
      <section>
        <div className='conteudo'>
          <div className='loginzin'>
            <p>Crie sua Conta</p>
          </div>
              <div className='domo'>
                  <p>Nome:</p> <input className='inpu3' type="text" name="name type ahead" id="email_type_ahead" ></input>
                  <p>Telefone:</p> <input className='inpu4' type="(number)" name="tel type ahead" id="email_type_ahead" ></input>
                 <p>CPF:</p> <input className='inpu5' type="text" name="email type ahead" id="email_type_ahead" ></input>
                <p>Email:</p> <input className='inpu1' type="text" name="email type ahead" id="email_type_ahead" ></input>
                <p>Senha:</p><input className='inpu2'type='password' autoComplete='username'></input>
              </div>
            <button class="ui-button ui-button--primary ui-button--full-width ui-button--size-large  captcha__submit" type="submit" name="commit" data-disable="true" data-bind-disabled="captchaDisabled" define="{localClass: new CaptchaStateHandler($context, {
                            v2Completed: true,
                            v3EnterpriseCompleted: false,
                            formCompleted: true,
                          })}" enable_submit_onload="true">Cadastrar-se</button>
          <div className='tchouameni'>
          <p>Já possuí uma conta?ﾠ
            <a class="login-footer__link" target="_blank" href="" title="Cadastro">Faça seu Login</a>
          !</p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default App;
