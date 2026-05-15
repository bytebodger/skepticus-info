import { NavLink } from 'react-router-dom';

const navItems = [
    {
        to: '/',
        label: 'Overview',
    },
    // { to: '/counter-apologetics', label: 'Counter-Apologetics' },
    // { to: '/research-briefs', label: 'Research Briefs' },
    {
        to: '/illustrations',
        label: 'Illustrations',
    },
    {
        to: '/prophecy-scorecard',
        label: 'Prophecy Scorecard',
    },
    {
        to: '/soundboard',
        label: 'Soundboard',
    },
    {
        to: '/source-library',
        label: 'Source Library',
    },
    {
        to: '/syllogisms',
        label: 'Syllogisms',
    },
    {
        to: '/syllogism-builder',
        label: 'Syllogism Builder',
    },
    // { to: '/stream-toolkit', label: 'Stream Toolkit' },
];

export function Sidebar()
{
    return (
        <aside className='sidebar'
            aria-label='Primary'>
            <h1 className='brand'>
                <img
                    className='brand-logo'
                    src='/skepticus-logo.png'
                    alt=''
                    aria-hidden='true'
                    onError={(event) =>
                    {
                        event.currentTarget.style.display = 'none';
                    }}
                />
                <span>Skepticus Info</span>
            </h1>
            <nav>
                <ul className='nav-list'>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.to === '/'}
                                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
