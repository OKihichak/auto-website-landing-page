import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Weitere Möglichkeiten: {' '}
            <span className="underline text-blue">
            Finden Sie einen RS Partner {' '}
            </span>
            oder {' '}
            <span className="underline text-blue">
            Händler in 
            </span>{' '}
            Ihrer Nähe.
          </p>
          <p className="font-semibold text-gray text-xs">
            Oder rufen Sie uns an: +49 (0)000 00-0
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">© 2026 RS AG. Alle Rechte vorbehalten.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer