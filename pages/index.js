import Link from 'next/link';
import Image from 'next/image'
import { getPosts } from '../utils/mdx-utils';

import ThemeSwitcher from '../components/ThemeSwitcher';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import { experience, projects } from '../utils/common';
import Img from '../images/img.png'

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      {/*<Header name={globalData.name} />*/}
      <main className="flex relative justify-between gap-x-12">
          <div className='block w-full'>
              <div className='sticky top-16'>
                  <div className='max-h-100 overflow-y-scroll'>
                      <h1 className='text-3xl lg:text-5xl'>Rabia Iqbal</h1>
                      <h2 className='text-2xl my-4'>Full-stack developer</h2>
                      <p className=''>I build accessible, inclusive products and digital experiences for the web.</p>
                      <ul className='mt-8'>
                        <li>
                            <Link href="#about">
                                <a className='group flex items-center py-3'>
                                    <span className='mr-4 h-px w-8 transition-all bg-gray-400 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                    <span className='text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200'>about</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#experience">
                                <a className='group flex items-center py-3'>
                                    <span className='mr-4 h-px w-8 transition-all bg-gray-400 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                    <span className='text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200'>experience</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects">
                                <a className='group flex items-center py-3'>
                                    <span className='mr-4 h-px w-8 transition-all bg-gray-400 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                    <span className='text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200'>projects</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog">
                                <a className='group flex items-center py-3'>
                                    <span className='mr-4 h-px w-8 transition-all bg-gray-400 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                    <span className='text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200'>blog</span>
                                </a>
                            </Link>
                        </li>
                      </ul>
                      <ThemeSwitcher classes='mt-4 max-w-[10rem]' />
                  </div>
              </div>
          </div>
          <div className='w-full' id='about'>
              <div>
                  <p className='mb-4'>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
                  <p className='mb-4'> My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
                  <p className='mb-4'>When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
              </div>

              <div className='mb-[6rem]' id='experience'>
                  {experience.map((item, index) => (
                      <div className='flex mb-10 rounded p-2 lg:p-4 group backdrop-blur-lg transition-all bg-white dark:bg-black dark:bg-opacity-0 bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-10' key={index}>
                          <Link href={item.link}>
                              <a target='_blank'><p className='uppercase mr-3 text-xs font-bold min-w-[7rem]'>{item.from} - {item.to}</p></a>
                          </Link>

                          <div>
                            <Link href={item.link}>
                                <a target='_blank'>
                                    <h3 className='font-bold leading-4 flex justify-between'>
                                        <span>{item.role} · {item.company}</span>
                                        <ArrowIcon className='-rotate-45' />
                                    </h3>
                                    <p className='text-sm mt-2 mb-4 opacity-60'>{item.desc}</p>
                                </a>
                            </Link>
                            <div className='flex flex-wrap items-baseline'>
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
          </div>
      </main>

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
