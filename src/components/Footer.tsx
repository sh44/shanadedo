import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto w-full bg-neutral-800/90 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <p className="text-2xl font-bold">{t('footer.contact')}</p>
      </div>
    </footer>
  );
}
