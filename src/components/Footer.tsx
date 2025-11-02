import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <p> {t('footer.contact')}</p>
      </div>
    </footer>
  );
}
