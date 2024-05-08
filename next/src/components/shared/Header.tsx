import {FC} from "react";
import Link from "next/link";

const staticLinks = [
  {href: '/blog', label: 'Blog'},
  {href: '/sample-page', label: 'Sample page'},
  {href: '/privacy-policy', label: 'Privacy policy'},
]

export const Header: FC = (props) => {
  return (
      <header>
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <Link className="inline-block py-4"
                  href={'/'}>Logo</Link>
            <nav>
              <ul>
                {staticLinks.map((link) => (
                    <li key={link.href}
                        className="inline-block px-2 mx-2 my-4 underline-offset-2"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}