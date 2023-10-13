import Link from 'next/link';
import Image from 'next/image'


import SEO from '../components/SEO';
import ArrowIcon from '../components/ArrowIcon';
import SocialIcons from '../components/SocialIcons';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Layout, { GradientBackground } from '../components/Layout';

import { getPosts } from '../utils/mdx-utils';
import { getGlobalData } from '../utils/global-data';
import { experience, projects } from '../utils/common';

import Img from '../images/img.png'

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <div className="lg:flex lg:justify-between lg:gap-10">
          <header className='lg:sticky lg:top-1 lg:flex lg:max-h-[90vh] lg:w-1/2 lg:flex-col lg:justify-between'>
                  <div>
                      <h1 className='text-3xl lg:text-5xl'>Rabia Iqbal</h1>
                      <h2 className='text-2xl my-2'>Full-stack developer</h2>
                      <p className='opacity-60 text-base'>Freelance developer who is passionate about building innovative web and mobile solutions.</p>
                      <nav>
                          <ul className='mt-10'>
                              <li>
                                  <Link href="#about">
                                      <a className='group flex items-center py-3 opacity-60 hover:opacity-100 transition-all'>
                                          <span className='mr-4 h-px w-8 transition-all bg-black opacity-60 dark:bg-white group-hover:w-16 group-hover:opacity-100 group-focus-visible:w-16 group-focus-visible:opacity-100 motion-reduce:transition-none'></span>
                                          <span className='text-xs font-bold uppercase tracking-widest'>about</span>
                                      </a>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#experience">
                                      <a className='group flex items-center py-3 opacity-60 hover:opacity-100 transition-all'>
                                          <span className='mr-4 h-px w-8 transition-all bg-black opacity-60 dark:bg-white group-hover:w-16 group-hover:opacity-100 group-focus-visible:w-16 group-focus-visible:opacity-100 motion-reduce:transition-none'></span>
                                          <span className='text-xs font-bold uppercase tracking-widest'>experience</span>
                                      </a>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#projects">
                                      <a className='group flex items-center py-3 opacity-60 hover:opacity-100 transition-all'>
                                          <span className='mr-4 h-px w-8 transition-all bg-black opacity-60 dark:bg-white group-hover:w-16 group-hover:opacity-100 group-focus-visible:w-16 group-focus-visible:opacity-100 motion-reduce:transition-none'></span>
                                          <span className='text-xs font-bold uppercase tracking-widest'>projects</span>
                                      </a>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#blog">
                                      <a className='group flex items-center py-3 opacity-60 hover:opacity-100 transition-all'>
                                          <span className='mr-4 h-px w-8 transition-all bg-black opacity-60 dark:bg-white group-hover:w-16 group-hover:opacity-100 group-focus-visible:w-16 group-focus-visible:opacity-100 motion-reduce:transition-none'></span>
                                          <span className='text-xs font-bold uppercase tracking-widest'>blog</span>
                                      </a>
                                  </Link>
                              </li>
                          </ul>
                      </nav>
                  </div>

                  <div>
                      <SocialIcons />
                      <ThemeSwitcher classes='mt-4 max-w-[10rem]' />
                  </div>
          </header>
          <main className='lg:w-1/2'>
              <div id='about' className='text-base'>
                  <p className='mb-4'>
                      I am full-stack developer with nearly seven years of experience in software development, Over the years, I've honed my skills in a wide range of technologies, including front-end frameworks like <strong>React, React Native, Svelte, Vue.js, Next.js, Qwik</strong>, and <strong>CSS</strong> preprocessors like <strong>SCSS</strong> and <strong>LESS</strong>
                  </p>
                  <p className='mb-4'>On the back-end, I specialize in <strong>Node.js, GraphQL, Sequelize</strong>, and have a deep understanding of databases such as <strong>MongoDB, PostgreSQL</strong> and <strong>SQL</strong>.</p>
                  <p className='mb-4'> My web development toolkit includes <strong>Hugo</strong> and <strong>Tailwind CSS</strong>, enabling me to create modern, efficient, and <strong>SEO-friendly</strong> websites.</p>
                  <p>Feel free to reach out if you're interested in working together or have any questions about my expertise or past projects. I'm excited to embark on new challenges and bring innovative ideas to life.</p>
              </div>

              <div className='my-[6rem]' id='experience'>
                  {experience.map((item, index) => (
                      <div className='flex mb-10 rounded p-2 lg:p-4 group backdrop-blur-lg transition-all bg-white dark:bg-black dark:bg-opacity-0 bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-10' key={index}>
                          <Link href={item.link}>
                              <a target='_blank' rel="noreferrer"><p className='uppercase mr-3 text-xs font-bold min-w-[7rem]'>{item.from} - {item.to}</p></a>
                          </Link>

                          <div>
                            <Link href={item.link}>
                                <a target='_blank'>
                                    <h3 className='font-bold leading-4 flex justify-between'>
                                        <span>{item.role} · {item.company}</span>
                                        <ArrowIcon className='-rotate-45' />
                                    </h3>
                                    <p className='text-sm my-2 opacity-60'>{item.desc}</p>
                                </a>
                            </Link>
                              {item.apps.length ? (
                                  <ul className='flex flex-wrap'>
                                      {item.apps.map((app, i) => (
                                          <li className='mr-4 opacity-80 hover:opacity-100 transition-all' key={i}>
                                              <Link href={app.link}>
                                                  <a className='mt-2 inline-flex items-center text-xs font-bold' target='_blank' rel='noreferrer'>
                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                           fill="currentColor" className="mr-1 h-3 w-3"
                                                           aria-hidden="true">
                                                          <path
                                                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                          <path
                                                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                      </svg>
                                                      <span>{app.name}</span>
                                                  </a>
                                              </Link>
                                          </li>
                                      ))}
                                  </ul>
                              ) : ''}
                            <div className='flex flex-wrap items-baseline mt-4'>
                                {item.technologies_used.map((tech, i) => (
                                    <p className='text-center text-xs font-bold dark:bg-primary rounded-3xl p-2 mb-2 mr-2 bg-white' key={i}>{tech}</p>
                                ))}
                            </div>
                          </div>
                      </div>
                  ))}
              </div>

              <div id='projects' className='mb-[6rem]'>
                  {projects.map((project, index) => (
                      <Link href={project.link} key={index}>
                          <a className='flex mb-10 rounded p-2 lg:p-4 group backdrop-blur-lg transition-all bg-white dark:bg-black dark:bg-opacity-0 bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-10' target='_blank'>
                              <div className='mr-3 w-3/12'>
                                  <Image src={Img} alt={`${project.name} image`} width={112} height={50} objectFit='contain' />
                              </div>
                              <div className='w-9/12'>
                                  <h3 className='font-bold leading-4 flex justify-between'>
                                      <span>{project.name}</span>
                                      <ArrowIcon className='-rotate-45' />
                                  </h3>
                                  <p className='text-sm mt-2 mb-4 opacity-60'>{project.desc}</p>
                              </div>
                          </a>
                      </Link>
                  ))}
              </div>

              <ul id='blog'>
                  {posts.map((post) => (
                      <li key={post.filePath}
                          className="mb-10 rounded backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition">
                          <Link
                              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                              href={`/posts/[slug]`}>
                              <a className="p-2 lg:p-4 block focus:outline-none focus:ring-4">
                                  {post.data.date && (
                                      <p className="uppercase text-xs font-bold opacity-60">
                                          {post.data.date}
                                      </p>
                                  )}
                                  <h3 className="font-bold my-2">{post.data.title}</h3>
                                  {post.data.description && (
                                      <p className="text-sm opacity-60">{post.data.description}</p>
                                  )}
                                  <ArrowIcon className="mt-2" />
                              </a>
                          </Link>
                      </li>
                  ))}
              </ul>
          </main>
      </div>

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
