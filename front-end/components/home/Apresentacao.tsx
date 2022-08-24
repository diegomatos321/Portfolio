import { Navigation, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Apresentacao(): JSX.Element {
    return (
        <section id="home">
            <div className="apresentacao-background">
                <div className="container-apresentacao">
                    <h1>Desenvolvedor de Software</h1>
                    <picture>
                        <source srcSet="/assets/imagens/foto-perfil.webp" type="image/webp" />
                        <img src="/assets/imagens/foto-perfil.png" alt="Foto de Perfil" title="Foto de Perfil" />
                    </picture>
                    <div className="areas-trabalho" style={{ overflowX: 'hidden' }}>
                        <Swiper
                            modules={[Navigation, Autoplay, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={{
                                delay: 10_000
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className='conteudo-trabalho'>
                                    <p>Encontre a solução ideal para seu negócio online, trabalho com páginas institucionais, blogs, lojas virtuais ou qualquer outra plataforma típica web.</p>
                                    <p>Entre em contato comigo!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="conteudo-trabalho">
                                    <p>O processo interno de sua empresa está lento e apresenta falhas? Talvez seja a hora de informatiza-la! Com uma solução em gestão certa, seja para na parte financeira ou administrativa, a produtividade de sua empresa irá subir!</p>
                                    <p>Entre em contato comigo!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="conteudo-trabalho">
                                    <p>Precisando tirar aquela ideia de um aplicativo do papel? Não se preocupe, trabalho com as tecnologias mais modernas do mercado e publico tanto para Android (Play Store) e App Store (iOS)</p>
                                    <p>Entre em contato comigo!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="conteudo-trabalho">
                                    <p>Você já possui algum sistema/plataforma mas está lento ou apresentando problemas? Talvez queira trocar o sistema atual para uma solução mais moderna?</p>
                                    <p>Entre em contato comigo!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="conteudo-trabalho">
                                    <p>Deseja transformar uma ideia de um <strong>jogo</strong> para a realidade? Eu sou a pessoa certa! Trabalho com as tecnologias mais modernas no mercado!</p>
                                    <p>Entre em contato comigo!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="buttons flex-container">
                        <a
                            className="flex-item btn"
                            href="assets/documentos/curriculo.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Baixe o meu curriculum
                        </a>
                        <a
                            className="flex-item btn"
                            href="https://github.com/diegomatos321/Portfolio"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Veja esse site no GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
