import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div className="root">
      <Head>
          <title>Next Portfolio</title>
         
      </Head>
    <header>
      <Link href="/">
        <a>Home &nbsp;</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}

    <hr />
    <footer>Mk2 Inc. &copy; {new Date().getFullYear()} </footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h2 {
          letter-spacing: 2px;
          font-size: 1.5em;
          font-weight: 300;
        }

        header {
            margin: 0;
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: #4a4e69;
        }

        header h1 {
            font-weight: 200;
        }

        header a {
          color: white;
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        header a:hover {
          color: #9bf6ff;
          font-weight: bold;
        }

        footer {
          padding: 1em;
          font-size: 0.85em;
          letter-spacing: 1px;
          font-weight: 200;
        }

      `}
    </style>
    <style global jsx>
      {`
        
      `}
    </style>
  </div>
);


export default Layout;