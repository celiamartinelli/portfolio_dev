import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SendSuccessfully from '../Pages/NotFound/SendSuccessfully';

export default function Form() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const form = e.target;
    const formData = new FormData(form);

    // Envoyer les données au backend de Netlify
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsModalOpen(true); // Ouvre la modal en cas de succès
        form.reset(); // Réinitialise le formulaire après la soumission
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur de soumission : ', error);
    }
  };

  return (
    <div id="contact-form">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-lg p-4 bg-lightMint dark:bg-darkBG dark:bg-opacity-85 w-80 h-150 my-5 shadow-lg"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // action="/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          Ne pas remplir ce champ : <input name="bot-field" />
        </p>
        <label htmlFor="name" className="mb-2 text-white">
          {t('form.name')}
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
        </label>
        <label htmlFor="email" className="mb-2 text-white">
          {t('form.email')}
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
        </label>
        <label htmlFor="reason" className="mb-2 text-white">
          {t('form.subject')}
          <input
            type="text"
            id="reason"
            name="reason"
            required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
        </label>
        <label htmlFor="message" className="mb-2 text-white">
          {t('form.message')}
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none border-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-vertFonce1 dark:bg-darkBlue text-white p-2 rounded w-full flex justify-center items-center active:bg-emerald-700 transition ease-in duration-25 transform hover:scale-95 shadow-md"
        >
          {t('form.send')}
        </button>
      </form>
      {isModalOpen && (
        <SendSuccessfully onClose={() => setIsModalOpen(!setIsModalOpen)} />
      )}
    </div>
  );
}
