import React from 'react';

import { Header } from './Header';
// 기존 CSS import 제거

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Pages in Storybook</h2>
        <p className="mb-2">
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p className="mb-2">
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul className="list-disc pl-5 mb-2 text-gray-700">
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p className="mb-2">
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper bg-blue-50 border-l-4 border-blue-400 p-3 mt-4 flex items-center gap-2">
          <span className="tip font-bold text-blue-700">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
      {/* Storybook으로 이동 버튼 추가 */}
      <div className="flex justify-center mt-8">
        <button
          type="button" // submit 방지
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-semibold shadow"
          onClick={() => window.open('http://localhost:6006', '_blank')}
        >
          Storybook으로 이동
        </button>
      </div>
    </article>
  );
};
