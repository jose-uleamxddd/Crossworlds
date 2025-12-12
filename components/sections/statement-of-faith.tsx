'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function StatementOfFaith() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-[#0b5298]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0b5298] rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Declaración de Fe' : 'Statement of Faith'}
          </h2>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-[#0b5298]/10">
          {/* Who We Are */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0b5298] mb-4">
              {language === 'es' ? '¡Quiénes somos!' : 'Who We Are!'}
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {language === 'es' 
                ? 'Tenemos un corazón por los jóvenes adultos, y buscamos fomentar comunidades de gracia y compasión para aquellos que están heridos y necesitan la sanidad de Cristo.'
                : 'We have a heart for young adults, and we seek to foster communities of grace and compassion for those who are hurting and need the healing of Christ.'}
            </p>
            <p className="text-foreground/80 leading-relaxed">
              {language === 'es'
                ? 'Creemos en la unidad sacrificial dentro del cuerpo de Cristo, caminando en amor y humildad como miembros de la familia de Dios. Nuestro anhelo es ver a hombres y mujeres transformados por el evangelio, reflejando el carácter y la belleza de Jesucristo.'
                : 'We believe in sacrificial unity within the body of Christ, walking in love and humility as members of God\'s family. Our longing is to see men and women transformed by the gospel, reflecting the character and beauty of Jesus Christ.'}
            </p>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-foreground/80 leading-relaxed">
                {language === 'es'
                  ? 'Estamos marcados por nuestro compromiso con las Escrituras como la Palabra de Dios, autoritativa y verdadera. Creemos en Sus promesas, y tanto de manera individual como en comunidad, buscamos Sus propósitos con fe y obediencia.'
                  : 'We are marked by our commitment to Scripture as the Word of God, authoritative and true. We believe in His promises, and both individually and in community, we seek His purposes with faith and obedience.'}
              </p>

              {/* What We Believe */}
              <div className="pt-6 border-t border-[#0b5298]/20">
                <h3 className="text-2xl font-bold text-[#0b5298] mb-4">
                  {language === 'es' ? '¡En qué creemos!' : 'What We Believe!'}
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Como una organización cristiana no denominacional y sin fines de lucro, el liderazgo y el personal del Crossworlds Connections sostienen estas creencias fundamentales. Ellas guían nuestra visión y todo lo que hacemos:'
                    : 'As a non-denominational Christian non-profit organization, Crossworlds Connections leadership and staff hold these fundamental beliefs. They guide our vision and everything we do:'}
                </p>

                {/* Beliefs List */}
                <div className="space-y-4">
                  {[
                    {
                      titleES: 'La Biblia',
                      titleEN: 'The Bible',
                      textES: 'Creemos que la Biblia es la Palabra inspirada de Dios, totalmente verdadera y autoritativa, y la norma final para la fe y la práctica.',
                      textEN: 'We believe the Bible is the inspired Word of God, completely true and authoritative, and the final standard for faith and practice.',
                    },
                    {
                      titleES: 'Dios',
                      titleEN: 'God',
                      textES: 'Creemos en un solo Dios eterno, el Creador de todas las cosas, que existe en tres Personas: el Padre, el Hijo y el Espíritu Santo. Él es perfecto en santidad, justicia, sabiduría y amor.',
                      textEN: 'We believe in one eternal God, the Creator of all things, who exists in three Persons: the Father, the Son, and the Holy Spirit. He is perfect in holiness, justice, wisdom, and love.',
                    },
                    {
                      titleES: 'La Humanidad y el Pecado',
                      titleEN: 'Humanity and Sin',
                      textES: 'Creemos que todas las personas han sido creadas a imagen de Dios, pero que el pecado nos ha separado de Dios y de Su propósito para nuestras vidas.',
                      textEN: 'We believe all people have been created in God\'s image, but that sin has separated us from God and His purpose for our lives.',
                    },
                    {
                      titleES: 'Jesucristo',
                      titleEN: 'Jesus Christ',
                      textES: 'Creemos que Jesucristo, plenamente Dios y plenamente hombre, es el único que puede reconciliarnos con Dios. Vivió una vida sin pecado, murió en la cruz en nuestro lugar y resucitó, demostrando Su victoria sobre el pecado y la muerte.',
                      textEN: 'We believe Jesus Christ, fully God and fully man, is the only one who can reconcile us with God. He lived a sinless life, died on the cross in our place, and rose again, demonstrating His victory over sin and death.',
                    },
                    {
                      titleES: 'La Salvación',
                      titleEN: 'Salvation',
                      textES: 'Creemos que la salvación es por gracia mediante la fe. Para recibir perdón y nueva vida debemos arrepentirnos de nuestros pecados, creer en el Señor Jesucristo y rendirnos a Él como Señor.',
                      textEN: 'We believe salvation is by grace through faith. To receive forgiveness and new life, we must repent of our sins, believe in the Lord Jesus Christ, and surrender to Him as Lord.',
                    },
                    {
                      titleES: 'El Espíritu Santo',
                      titleEN: 'The Holy Spirit',
                      textES: 'Creemos que en el momento de la salvación el Espíritu Santo mora permanentemente en cada creyente, sellándonos para la eternidad y capacitándonos con dones espirituales para servir en el Cuerpo de Cristo, la Iglesia.',
                      textEN: 'We believe that at the moment of salvation, the Holy Spirit permanently dwells in every believer, sealing us for eternity and empowering us with spiritual gifts to serve in the Body of Christ, the Church.',
                    },
                    {
                      titleES: 'El Bautismo',
                      titleEN: 'Baptism',
                      textES: 'Creemos que el bautismo por inmersión no es necesario para la salvación; más bien, es un acto de obediencia y un testimonio público de fe en Jesucristo.',
                      textEN: 'We believe baptism by immersion is not necessary for salvation; rather, it is an act of obedience and a public testimony of faith in Jesus Christ.',
                    },
                    {
                      titleES: 'La Iglesia',
                      titleEN: 'The Church',
                      textES: 'Creemos que la Iglesia es el Cuerpo de Cristo, conformado por todos los creyentes. Estamos llamados a reunirnos regularmente para adorar, orar, tener comunión y partir el pan, y a vivir como Sus testigos en el mundo.',
                      textEN: 'We believe the Church is the Body of Christ, made up of all believers. We are called to gather regularly to worship, pray, fellowship, and break bread, and to live as His witnesses in the world.',
                    },
                    {
                      titleES: 'La Vida Cristiana',
                      titleEN: 'Christian Life',
                      textES: 'Creemos que Dios nos llama a vivir vidas santas, capacitadas por Su Espíritu, adorándole, sirviendo a otros y llevando a cabo Su misión en nuestras familias, iglesias y comunidades.',
                      textEN: 'We believe God calls us to live holy lives, empowered by His Spirit, worshiping Him, serving others, and carrying out His mission in our families, churches, and communities.',
                    },
                    {
                      titleES: 'Sanidad y Transformación',
                      titleEN: 'Healing and Transformation',
                      textES: 'Creemos que Dios obra para sanar y transformar a Su pueblo de modo que podamos vivir vidas fructíferas y servir a otros de manera más efectiva.',
                      textEN: 'We believe God works to heal and transform His people so we can live fruitful lives and serve others more effectively.',
                    },
                    {
                      titleES: 'La Eternidad',
                      titleEN: 'Eternity',
                      textES: 'Creemos que el cielo y el infierno son reales y eternos. Nuestra respuesta a Jesucristo determina nuestro destino eterno.',
                      textEN: 'We believe heaven and hell are real and eternal. Our response to Jesus Christ determines our eternal destiny.',
                    },
                    {
                      titleES: 'El Regreso de Cristo',
                      titleEN: 'The Return of Christ',
                      textES: 'Creemos que el Señor Jesucristo volverá tal como lo prometió. Hasta entonces, estamos llamados a crecer en nuestro conocimiento de Él, en nuestro amor por Él y en nuestra obediencia a Su Palabra.',
                      textEN: 'We believe the Lord Jesus Christ will return as He promised. Until then, we are called to grow in our knowledge of Him, in our love for Him, and in our obedience to His Word.',
                    },
                  ].map((belief, index) => (
                    <div key={index} className="pl-4 border-l-4 border-[#0b5298]/30">
                      <h4 className="font-bold text-[#0b5298] mb-1">
                        {language === 'es' ? belief.titleES : belief.titleEN}
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {language === 'es' ? belief.textES : belief.textEN}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0b5298] text-white font-semibold rounded-lg hover:bg-[#093f72] transition-colors"
          >
            {isExpanded ? (
              <>
                {language === 'es' ? 'Mostrar menos' : 'Show less'}
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                {language === 'es' ? 'Mostrar más' : 'Show more'}
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
