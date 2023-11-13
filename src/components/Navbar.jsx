import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/Language';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Text } from '../context/Language';

const SwitchButton = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const [state, setState] = useState(userLanguage);
  useEffect(() => {
    userLanguageChange(state);
  }, [state]);
  return (
    <div className='flex items-center flex-1 md:flex-none justify-end mr-4 md:mr-0'>
      <label className='w-[96px] h-[50px] relative flex justify-center items-center rounded-[25px] bg-gray-600/90 cursor-pointer'>
        <input
          type='checkbox'
          className='hidden'
          onChange={() => setState((prev) => (prev === 'en' ? 'sr' : 'en'))}
        />
        <div
          className={`w-[86px] h-[40px] bg-gradient-to-b relative from-[#8b8c8e] from-20% to-[#f4f4f4] rounded-[20px] after:content-[""] after:absolute after:inset-[3px] after:w-[80px] after:h-[36px] after:rounded-[18px] ${
            state === 'en'
              ? 'after:violet-gradient after:btn-div-shadow'
              : 'after:blue-gradient after:btn-div-after-shadow'
          } flex justify-between items-center transition-all`}
        >
          <span className='ml-[14px] relative z-10 text-xs'>EN</span>
          <span className='mr-[14px] relative z-10 text-xs'>SR</span>
        </div>
        <span
          className={`w-[50px] h-[50px] absolute bg-gradient-to-b from-[#9e9e9e] from-[20%] to-[#f4f4f4] rounded-full btn-span-shadow transition-all ${
            state === 'en' ? 'left-[6px]' : 'left-[40px]'
          } after:content-[''] after:absolute after:block after:w-[42px] after:h-[42px] after:inset-[4px] after:bg-[#d5d4d4] after:z-10 after:rounded-full`}
        ></span>
      </label>
    </div>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary border-b border-slate-500' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={goTop}>
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Saša &nbsp;
            <span className='sm:block hidden'> | Frontend Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`#${nav.id}`}>
                <Text tid={nav.id} />
              </Link>
            </li>
          ))}
        </ul>
        <SwitchButton state={language} setState={setLanguage} />
        <div className='lg:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-24 right-0 mx-4 my-2 min-w-[256px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                >
                  <Link to={`#${nav.id}`} onClick={() => setToggle(!toggle)}>
                    <Text tid={nav.id} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
