import { useContactForm } from "../../../../hooks/useContactForm";

export const HeroColumns = () => {

    const { formData, handleChange, submitForm, loading, success, error } = useContactForm();

    return (
        <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mx-0 my-[13.7px] scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:-mx-3 md:my-[15px]">
            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-6/12 md:mb-0 md:px-3">
                <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-full mx-auto md:text-[15px] md:float-left md:mx-0">
                    <picture className="relative text-[13.7px] caret-transparent block h-0 break-words w-full overflow-hidden pt-[150%] rounded-[5.48px] md:text-[15px] md:rounded-md">
                    <img
                        alt=""
                        src="https://c.animaapp.com/miaeix11cZ55hM/assets/20.jpg"
                        sizes="auto, min(100vw, 1200px), 100vw"
                        className="absolute text-[13.7px] aspect-[auto_800_/_1200] caret-transparent h-full max-w-full object-cover break-words w-full rounded-[5.48px] inset-0 md:text-[15px] md:rounded-md"
                    />
                    </picture>
                </div>
                </div>
            </div>
            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-6/12 md:mt-0 md:px-3">
                <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                    <h2 className="text-[22.5px] font-bold caret-transparent leading-[24.75px] break-words text-center mb-[6.75px] md:text-3xl md:leading-[33px] md:mb-[9px]">
                    <span className="text-orange-500 text-[22.5px] caret-transparent leading-[24.75px] break-words md:text-3xl md:leading-[33px]">
                        Proceso Eficiente y Transparente
                    </span>
                    </h2>
                    <h2 className="text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words text-center mt-[16.16px] mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mt-[20.4px] md:mb-[7.65px]">
                    <span className="text-[20.2px] caret-transparent leading-[22.22px] break-words md:text-[25.5px] md:leading-[28.05px]">
                        Te acompañamos en cada paso del proceso, asegurando que estés
                        informado y apoyado en todo momento
                    </span>
                    </h2>
                </div>
                </div>
                <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            submitForm();
                        }} 
                        className="relative text-[13.7px] caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]"
                    >
                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Nombre *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-zinc-600/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Contacto *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <input
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    type="text"
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-zinc-600/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Dirección de correo electrónico *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-zinc-600/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Nombre de la empresa donde invirtió *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <input
                                    name="investCompany"
                                    value={formData.investCompany}
                                    onChange={handleChange}
                                    type="text"
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-zinc-600/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Monto aproximado de la inversión *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <input
                                    name="amountInvest"
                                    value={formData.amountInvest}
                                    onChange={handleChange}
                                    type="text"
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-zinc-600/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                Cuéntanos la historia *
                            </label>
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <textarea
                                    name="summaryHistory"
                                    value={formData.summaryHistory}
                                    onChange={handleChange}
                                    className="text-[13.7px] bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] min-h-[82.2px] align-top w-full border-zinc-600/50 p-2.5 rounded-sm md:text-[15px] md:min-h-[90px]"
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    name="submit"
                                    className="text-[13.7px] items-center bg-orange-500 caret-transparent inline-flex justify-center leading-[20.55px] outline-orange-500 break-words text-center px-[12.33px] py-[4.11px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] hover:bg-orange-400"
                                >
                                    <div className="text-[13.7px] caret-transparent leading-[20.55px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                        {loading ? "Enviando..." : "Enviar formulario"}
                                    </div>
                                </button>
                            </div>
                        </div>

                        {success && <p className="text-green-400">Formulario enviado!</p>}
                        {error && <p className="text-red-500">Error al enviar el formulario.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};
