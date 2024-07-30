import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, reason, description, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg p-4 bg-lightMint dark:bg-darkBG w-80 h-150 my-5 shadow-lg"
    >
      <label htmlFor="name" className="mb-2 text-white">
        {t('form.name')}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
        />
      </label>
      <label htmlFor="reason" className="mb-2 text-white">
        {t('form.subject')}
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
        />
      </label>
      <label htmlFor="description" className="mb-2 text-white">
        {t('form.message')}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none border-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
        />
      </label>
      <label htmlFor="email" className="mb-2 text-white">
        {t('form.email')}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border mt-1 p-2 rounded bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner shadow-emerald-500 dark:focus:ring-rose-500 dark:shadow-rose-400"
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-vertFonce1 dark:bg-darkBlue text-white p-2 rounded w-full flex justify-center items-center active:bg-emerald-700 transition ease-in duration-25 transform hover:scale-95"
      >
        {t('form.send')}
      </button>
    </form>
  );
}
