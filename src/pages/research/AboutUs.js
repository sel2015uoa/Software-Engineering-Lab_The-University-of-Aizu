import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/Layout'
// i18n
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    ja: {
      translation: {
        '研究室について': '研究室について',
      },
    },
    en: {
      translation: {
        '研究室について': 'About us',
      },
    },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

function AboutUs(title) {
  const [t, i18n] = useTranslation();

  return (
    <Layout title={title} pathname="/research/about_us" >
      <div className="AboutUs">
        {t('研究室について')}
      </div>
    </Layout>
  );
}

export default AboutUs;
