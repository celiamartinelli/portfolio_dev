import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SendSuccessfully from '../Pages/NotFound/SendSuccessfully';

export default function Form() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Expression régulière pour valider l'email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const reason = formData.get('reason');
    const message = formData.get('message');

    const newErrors = {};

    if (!name) newErrors.name = t('form.error.name');
    if (!email) {
      newErrors.email = t('form.error.email');
    } else if (!validateEmail(email)) {
      newErrors.email = t('form.error.invalidEmail');
    }
    if (!reason) newErrors.reason = t('form.error.subject');
    if (!message) newErrors.message = t('form.error.message');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Réinitialiser les erreurs s'il n'y en a plus
    setErrors({});

    // Envoyer les données au backend de Netlify
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsModalOpen(true);
        form.reset();
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
        className="flex flex-col rounded-lg p-4 bg-lightMint dark:bg-darkBG dark:bg-opacity-85 sm:w-80 w-60 h-150 my-5 shadow-lg "
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          Ne pas remplir ce champ : <input name="bot-field" />
        </p>
        <label htmlFor="name" className="mb-2 text-white flex flex-col">
          {t('form.name')}
          <input
            type="text"
            id="name"
            name="name"
            // required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
          {errors.name && (
            <p className="flex justify-end bg-red-500 text-white-500 mt-1 rounded-md shadow-md pr-2">
              {errors.name}
            </p>
          )}
        </label>
        <label htmlFor="email" className="mb-2 text-white">
          {t('form.email')}
          <input
            type="email"
            id="email"
            name="email"
            // required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
          {errors.email && (
            <p className="flex justify-end bg-red-500 text-white-500 mt-1 rounded-md shadow-md pr-2">
              {errors.email}
            </p>
          )}
        </label>
        <label htmlFor="reason" className="mb-2 text-white">
          {t('form.subject')}
          <input
            type="text"
            id="reason"
            name="reason"
            // required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
          {errors.reason && (
            <p className="flex justify-end bg-red-500 text-white-500 mt-1 rounded-md shadow-md pr-2">
              {errors.reason}
            </p>
          )}
        </label>
        <label htmlFor="message" className="mb-2 text-white">
          {t('form.message')}
          <textarea
            id="message"
            name="message"
            rows={4}
            // required
            className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none border-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
          />
          {errors.message && (
            <p className="flex justify-end bg-red-500 text-white-500 mt-1 rounded-md shadow-md pr-2">
              {errors.message}
            </p>
          )}
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
