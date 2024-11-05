import React from 'react'

export default function Page() {
    return (
        <section id={"blog"}>
            <div className="container p-6">
                <h1 className="text-6xl mb-6">Блог</h1>
                <div
                    className="post mb-6 last:mb-0  flex flex-col max-sm:w-full max-lg:w-4/5 w-3/4 border-4 border-black rounded-md p-3">
                    <h2 className="text-4xl text-blue-400 mb-6">Великолепный пост</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis impedit
                        repudiandae sequi.
                        Adipisci aliquam dicta eos explicabo ipsa laudantium minima minus modi molestias mollitia, nemo
                        nisi quia quod quos reiciendis.</p>

                    <div className="flex self-end mt-3 max-sm:self-center">
                        <p className="text-lg mr-4">2024-11-03</p>
                        <p className="text-lg">Владимир</p>
                    </div>
                </div>

                <div
                    className="post mb-6 last:mb-0 flex flex-col max-sm:w-full max-lg:w-4/5 w-3/4 border-4 border-black rounded-md p-3">
                    <h2 className="text-4xl text-blue-400 mb-6">Великолепный пост</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis impedit
                        repudiandae sequi.
                        Adipisci aliquam dicta eos explicabo ipsa laudantium minima minus modi molestias mollitia, nemo
                        nisi quia quod quos reiciendis.</p>

                    <div className="flex self-end mt-3 max-sm:self-center">
                        <p className="text-lg mr-4">2024-11-03</p>
                        <p className="text-lg">Владимир</p>
                    </div>
                </div>

                <div
                    className="post mb-6 last:mb-0  flex flex-col max-sm:w-full max-lg:w-4/5 w-3/4 border-4 border-black rounded-md p-3">
                    <h2 className="text-4xl text-blue-400 mb-6">Великолепный пост</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis impedit
                        repudiandae sequi.
                        Adipisci aliquam dicta eos explicabo ipsa laudantium minima minus modi molestias mollitia, nemo
                        nisi quia quod quos reiciendis.</p>

                    <div className="flex self-end mt-3 max-sm:self-center">
                        <p className="text-lg mr-4">2024-11-03</p>
                        <p className="text-lg">Владимир</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
