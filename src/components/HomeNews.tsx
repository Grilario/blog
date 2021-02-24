import styles from '../styles/components/HomeNews.module.css'

export default function HomeNews(){
    return(
        <div className="limit-app">
        <section className={styles.newsContainer}>
            <div style={{ 'backgroundImage': 'url(fundoex.jpg)'}}>
                <div>
                    <div className={styles.title}>
                        <h1>Cyberpunk removido da Playstation store</h1>
                    </div>
                    <div className={styles.content}>
                        <p>Em post no Twitter e no site oficial a Sony informou publicamente que irá reembolsar absolutamente todos os clientes que compraram Cyberpunk 2077 que solicitarem devolução. Além disso removeu o jogo da PS Store</p>
                    </div>
                </div>
            </div>
            
            
            <div style={{ 'backgroundImage': 'url(fundoex.jpg)'}}>
                <div>
                    <div className={styles.title}>
                        <h1>Cyberpunk removido da Playstation store</h1>
                    </div>
                    <div className={styles.content}>
                        <p>Em post no Twitter e no site oficial a Sony informou publicamente que irá reembolsar absolutamente todos os clientes que compraram Cyberpunk 2077 que solicitarem devolução. Além disso removeu o jogo da PS Store</p>
                    </div>
                </div>
            </div>
        </section>
        </div>

        //Puxar e ver a noticia 
    )
}