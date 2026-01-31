import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout.js"
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Secretariat() {
    return (
        <Layout>
            <Head>
                <title>{"Secretariat - " + siteTitle}</title>
            </Head>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN VII Secretariat
                        </h1>
                    </div>

                    <Tab.Group>
                        <Tab.List className='flex p-1 space-x-1 bg-sky-500/20 rounded-xl'>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                        selected
                                            ? 'bg-sky-500 text-white shadow'
                                            : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                The Secretariat
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                        selected
                                            ? 'bg-sky-500 text-white shadow'
                                            : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                Note from the Secretariat
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                {/* Meet the Secretariat*/}
                                <br />
                                <div className="container px-2 mx-auto">
                                    <h1 className="text-2xl text-center font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Meet the Secretariat
                                    </h1>

                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">


                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/elan.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Elan Suttiratana</h1>

                                                    <p className="mt-2 text-gray-500 ">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello delegates! My name is Elan Suttiratana, and I am a semior at Hackley School. I have been involved in Model United Nations since ninth grade, and joined the Hackley Secretariat as a sophomore year. Outside of Model UN, I play squash and am an avid reader. I am also interested in linguistics, computer science, and math. I look forward to seeing all of you at HackMUN!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/ben.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Ben Iaderosa</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello Delegates! My name is Ben Iaderosa and I am a senior at Hackley School. I have been doing Model UN for 7 years and I absolutely love it! I started it when my dad got a job at the United Nations and continued with it as I have become more involved and interested in international relations and politics. I am excited to meet you all at HackMUN!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/nikhil.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Nikhil Shah</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello delegates! My name is Nikhil Shah and I am a senior at Hackley. My love for theater and debate led me to Hackley MUN in 9th grade, and I joined the secretariat this year. Outside of Model UN, I have done dozens of musicals. I also enjoy competetive math and computer science, as well as puzzles and chess. I am excited to see everyone at HackMUN this year!</p>

                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/macey.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Macey McLane</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi everyone, my name is Macey McLane, and I am a senior. I started MUN in ninth grade to improve my public speaking skills and believe that it is a great way to push yourself out of your comfort zone. I enjoy running cross country and track, playing the violin, and volunteering outside of school. Looking forward to meeting you all at HackMUN!</p>
                                    
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/shreyas.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Shreyas Kuniyil</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello delegates, I am Shreyas Kuniyil, and I am a current sophomore at Hackley. My love for international politics and debate led me to Model UN in 9th grade, and I have enjoyed it ever since. Outside of MUN, I am actively involved in the Hackley Debate Program. I look forward to seeing you all at HackMUN!</p>

                                        </div>
                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/ella.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Ella Ferrari</h1>

                                                    <p className="mt-2 text-gray-500 ">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi everyone! My name is Ella, I am a junior at Hackley and a USG for HackMUN. Outside of MUN I participate in ethics bowl and DECA. I love to ski and have turned it into my sport and I work as a ski instructor! I am also a student ambassador leader and a on library advisory board, among many other things. If you can\\'t tell I am very social and love to speak! I also love to crotchet, read and am constantly coloring in my coloring book. I can\\'t wait to see all of you at HackMUN!!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/gabriel.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Gabriel Fossner</h1>

                                                    <p className="mt-2 text-gray-500 ">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi delegates and delegates-to-be, I\\'m Gabriel Fossner! I am a Junior at Hackley and a Model UN undersecretary general. I joined Model UN my Freshman year because I wanted to try new things and stuck with it because of my love of debate, research, and speaking. Outside of Model UN, I play a number of instruments including piano, bass guitar, and electric guitar. I also am a big history and economics buff, ex-competitive Rubik\\'s cuber, JV Squash Warrior, sprinter, vibe-coder, and avid doomscroller, as well as a big debater as a member of the Hackley debate team.</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/sophie.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Sophie Kim</h1>

                                                    <p className="mt-2 text-gray-500 ">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello everyone, my name is Sophie Kim. I am a junior at Hackley and have been involved in Model UN for the past three years. During my time of doing MUN I have grown my skills of collaboration, debate, and research. Outside of MUN, I lead Hackley’s baking club, a student ambassador; and a tri-season athlete. In my free time I love to read and try out new baking recipes. I am excited to see you all at HackMUN</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <Image className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/peter.jpg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Peter Park</h1>

                                                    <p className="mt-2 text-gray-500 ">Under-Secretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello Delegates, my name is Peter Park. I am a Junior at Hackley and an USG of HackMUN. I first joined Model UN as a freshman. I am also a member of Hackley\\'s debate, baseball, squash, and ethics bowl teams. I enjoy fishing, playing video games, and listening to music. Hope to see you all at HackMUN!</p>
                                        </div>

                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                {/* Note from the Secretariat*/}
                                <br />
                                <div className="mb-8 w-full">
                                    <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Note from the Secretaries General:
                                    </h2>

                                    <div className='py-5 text-l leading-normal text-gray-800 lg:text-l xl:text-l'>
                                        <p>Greetings Delegates!</p>
                                        <br />
                                        <p>This year&apos;s secretariat for Hackley School&apos;s 7th annual Model UN conference looks to extend its mission and values to both new and returning delegates, moderating debate that is fun, challenging, and transformative to each delegate&apos;s perspective of different facets of our world. In the year 2026, the need for young students to push themselves to think critically about global issues and together find solutions through disagreements, compromises, and discourses are more necessary than ever. </p>
                                        <br />
                                        <p>For many of us, the last few years seem to have been a perpetual crisis. To name a few: the lasting impacts of the global pandemic, continued political polarization in the United States, the ongoing wars in Gaza and Ukraine, rising tensions in the South China Sea, record‑breaking heat waves and climate‑driven disasters, and increasing environmental refugee crisesa. This is an important reminder that our next generation of young delegates attending HackMUN are the ones that will face such challenges in the future and should be prepared to tackle them through unity and collaboration. </p>
                                        <br />
                                        <p>The United Nations was formed in the aftermath of the second World War. Through this period of time, the UN has presided over what we dub as the Long Peace, where major world powers have not fought each other since 1945. In this peace, our world has changed immeasurably for the better. Technology has driven the human race to new frontiers far in the lands, deep in the oceans, high in the skies, and out there in our galaxy. Global movements for peace and justice have created a world order that, for the first time in history, gives everyday citizens a voice in government. And though we still have a long way to go, in the grand scheme of human civilization our progress has been unprecedented. But today we are once again at a crossroads. War has once again descended onto the European continent, democracies and autocracies are once again at an impasse, and a new cold war is brewing. This year&apos;s HackMUN conference confers on this turning point in our common history where our Long Peace is ending. For you, each of our delegates, this will be a year to remember — one that will surely transform the world&apos;s geopolitical landscape for decades to come.</p>
                                        <br />
                                        <p>Thus, this year at HackMUN VII, we wish for delegates of all backgrounds, whether first-timers or more polished debaters, to engage with the challenging issues at hand, while having fun and enjoying the experience of an in-person conference. Most importantly, grow and prosper in your perspectives. It is through this that we collectively stand a chance to right our world&apos;s wrongs.</p>
                                        <br />
                                        <p>Whether in resolving historical crises, addressing pressing current events in a general assembly, or securing the health and economy of the United States in a governmental body, there is something for everyone at HackMUN this year. We encourage you to strike an effective balance during committee between being a leader and a listener, a voice of optimism as well as a voice of practicalism, challenging yourself to be both a team player and the best individual delegate you can be. </p>
                                        <br />
                                        <p>Don&apos;t hesitate to reach out to any of the staff this year at HackMUN. We implore you to make the best of the resources you are given and help us make this conference the best it has ever been!</p>
                                        <br />
                                        <p className='italic'>ad meliora</p>
                                        <br />
                                        <p>Elan Suttiratana and Ben Iaderosa,</p>
                                        <br />
                                        <p>Secretaries-General of HackMUN V</p>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </Layout>
    )
}
