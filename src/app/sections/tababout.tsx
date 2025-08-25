import { useTranslations } from 'next-intl';
import { Blockquote, Spoiler, Badge } from '@mantine/core';
export default function TabAbout() {

  const t = useTranslations('TabAbout');
  // const locale = useLocale();

  return (
    <section className="contentPage--section tabAbout">
      <Blockquote color="teal"  mt="xl">
        {t('aboutMe')}
      </Blockquote>
      <h2>
        {t('helloMe')}
      </h2>
      <Spoiler maxHeight={120} showLabel="Ver más" hideLabel="Ver menos">
        <p>{t('textMe1')}</p>
        <p>{t('textMe2')}</p>
        <p>{t('textMe3')}</p>
      </Spoiler>
      <div className="pillsList">
      <h4>{t('titleBadges')}</h4>
        {['Shopify', 'WordPress', 'Woocommerce', 'React.js', 'Next.js', 'Vue.Js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'PHP', 'Laravel', 'HubSpot'].map((skill) => (
          <Badge 
          size='md' 
          key={skill}
          variant="gradient"
          gradient={{ from: '#D6FAC8', to: '#FDEDD8', deg: 90 }}
          className="pillsList--pill"
          >{skill}</Badge>
        ))}
      </div>
    </section>
  );
}
