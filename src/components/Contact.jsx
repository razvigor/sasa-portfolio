import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { Text } from '../context/Language';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [allFields, setAllFields] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const placeholderName = Text({ tid: 'contact-name-placeholder' });
  const placeholderEmail = Text({ tid: 'contact-email-placeholder' });
  const placeholderMessage = Text({ tid: 'contact-message-placeholder' });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name && form.email) {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: 'Trkulja Saša',
            from_email: form.email,
            to_email: 'kamaradsasa@gmail.com',
            message: form.message || '',
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);

            setForm({
              name: '',
              email: '',
              message: '',
            });
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          (error) => {
            setLoading(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          }
        );
    } else {
      setAllFields(true);
      setTimeout(() => {
        setAllFields(false);
      }, 3000);
      return;
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='w-full flex-1 bg-black-100 p-8 relative z-10 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          <Text tid='contact-getintouch' />
        </p>
        <h3 className={styles.sectionHeadText}>
          <Text tid='contact-contact' />
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <Text tid='contact-name' />{' '}
              <span className='text-red-500 text-xl'>*</span>
            </span>

            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={placeholderName}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <Text tid='contact-email' />{' '}
              <span className='text-red-500 text-xl'>*</span>
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={placeholderEmail}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <Text tid='contact-message' />
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={placeholderMessage}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? (
              <Text tid='contact-sending' />
            ) : (
              <Text tid='contact-send' />
            )}
          </button>
          {success ? (
            <p className='text-green-500 text-center'>
              <Text tid='contact-form-message'></Text>
            </p>
          ) : null}
          {error ? (
            <p className='text-red-500 text-center'>
              <Text tid='contact-form-error'></Text>
            </p>
          ) : null}
          {allFields ? (
            <p className='text-red-500 text-center'>
              <Text tid='contact-all-fields-with-star'></Text>
            </p>
          ) : null}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
