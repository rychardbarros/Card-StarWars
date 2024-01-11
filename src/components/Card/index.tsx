import * as S from './styles'
import img from '../../assets/sw-img.jpg'

export const Card = () => {
  return ( 
    <S.CardContainer>
      <div className='container'>
        <img src={img} alt="Imagem do Card" />
        <div>
            <h2>Pôster: Star Wars (1977)</h2>
            <p>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. 
              Uma otima recordação de um dos mais icônicos filmes de todos os tempos. 
              Este clássico pôster trará aventura, nostalgia e a magia
              de Star Wars para qualquer lugar que voce decidir pendurar. 
              Não perca a chance de adicionar essa linda memória ao seu acervo!
            </p>
            <button>Comprar agora</button>
        </div>
      </div>
    </S.CardContainer>
        
  )
}


