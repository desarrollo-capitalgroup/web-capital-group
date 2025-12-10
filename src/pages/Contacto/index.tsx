import { useEffect } from "react";
import Map from "../../components/Map";
import { useContactForm } from "../../hooks/useContactForm";
import { Link } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

export const Contacto = () => {
    const { formData, handleChange, submitForm, loading, success, error } = useContactForm();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: 'Contacto - Capital Group Recovery',
        description: 'Contáctenos para una consulta gratuita sobre recuperación de cartera. Respondemos en 24 horas.',
        keywords: 'contacto cobranza, consulta gratuita recuperación cartera',
        url: 'https://www.capitalgrouprecovery.com.mx/contacto'
    });

    return (
        <div className="text-[13.7px] bg-stone-50 caret-transparent grow shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
            <main className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
            <div className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
                <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                <div className="relative text-white text-[13.7px] bg-black box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                    <div className="relative text-[13.7px] caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]">
                    <img
                        src="https://c.animaapp.com/mialo3w6Xgfv7Y/assets/OQMZwNd3ThU.jpg"
                        alt=""
                        className="absolute text-[13.7px] aspect-[auto_1920_/_1281] caret-transparent h-full leading-[18.495px] object-cover break-words w-full inset-0 md:text-[15px] md:leading-[22.5px]"
                    />
                    <div className="absolute text-[13.7px] bg-black/30 caret-transparent h-full leading-[18.495px] break-words pointer-events-none w-full inset-0 md:text-[15px] md:leading-[22.5px]"></div>
                    </div>
                    <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
                    <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                            <h1 className="text-[37.5px] font-bold caret-transparent leading-[41.25px] break-words text-center md:text-6xl md:leading-[66px]">
                            <span className="text-orange-500 text-[37.5px] caret-transparent leading-[41.25px] break-words md:text-6xl md:leading-[66px]">
                                Contacto
                            </span>
                            </h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="relative text-[13.7px] box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                    <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
                    <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
                        <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mb-[13.7px] mx-0 scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:mb-[15px] md:-mx-3">
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[34%] md:mb-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <h2 className="text-orange-500 text-[22.5px] font-bold caret-transparent leading-[24.75px] break-words mb-[6.75px] md:text-3xl md:leading-[33px] md:mb-[9px]">
                                Contáctanos
                                </h2>
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                    Complete el formulario a continuación para
                                    enviarnos su documentación e información. Y
                                    nuestros abogados se comunicaran inmediatamente.
                                </p>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                                <form onSubmit={(e) => {
                                        e.preventDefault();
                                        submitForm();
                                    }}  
                                    className="relative text-[13.7px] caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]"
                                >
                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Nombre *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-neutral-400/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Contacto *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <input
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                type="text"
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-neutral-400/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Dirección de correo electrónico *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-neutral-400/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Nombre de la empresa donde invirtió *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <input
                                                name="investCompany"
                                                value={formData.investCompany}
                                                onChange={handleChange}
                                                type="text"
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-neutral-400/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Monto aproximado de la inversión *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <input
                                               name="amountInvest"
                                                value={formData.amountInvest}
                                                onChange={handleChange}
                                                type="text"
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] break-words w-full border border-neutral-400/50 p-2.5 rounded-sm border-solid md:text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <label className="text-[13.7px] box-border caret-transparent block leading-[18.495px] break-words mb-[10.275px] md:text-[15px] md:leading-[22.5px] md:mb-[11.25px]">
                                            Cuéntanos tu historia *
                                        </label>
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <textarea
                                                name="summaryHistory"
                                                value={formData.summaryHistory}
                                                onChange={handleChange}
                                                className="text-[13.7px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent max-w-[400px] min-h-[82.2px] align-top w-full border-neutral-400/50 p-2.5 rounded-sm md:text-[15px] md:min-h-[90px]"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[13.7px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[3.425px] md:text-[15px] md:leading-[22.5px] md:mb-[3.75px]">
                                            <button
                                                disabled={loading}
                                                type="submit"
                                                name="submit"
                                                className="text-white text-[13.7px] items-center bg-orange-500 caret-transparent inline-flex justify-center leading-[20.55px] outline-orange-500 break-words text-center px-[12.33px] py-[4.11px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] hover:bg-orange-400"
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
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[15.9%] md:my-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent h-[577.4px] leading-[18.495px] max-h-2.5 break-words md:text-[15px] md:leading-[22.5px] md:max-h-none"></div>
                            </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[50.1%] md:mt-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
                                <Map />
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <h2 className="text-orange-500 text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words mt-[16.16px] mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mt-[20.4px] md:mb-[7.65px]">
                                Ubicación
                                </h2>
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                Capital Group recovery
                                <br className="text-[13.7px] caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]" />
                                londres inglaterra
                                </p>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-[73px] mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://wa.me/+447916083718?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                                target="_blank"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                    <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/whatsapp.svg')] text-[13.7px] bg-stone-50 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                    </div>
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-[73px] mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://www.okx.com/es-la/account/register?action=header_register_btn"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                    <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/fullscreen-symbol.svg')] text-[13.7px] bg-stone-50 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                    </div>
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-[73px] mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://www.capitalgrouprecovery.com.mx/"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                    <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/google-plus-symbol-1.svg')] text-[13.7px] bg-stone-50 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                    </div>
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-[73px] mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://accounts.binance.com/es/register"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                    <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/bitcoin-logo.svg')] text-[13.7px] bg-stone-50 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                    </div>
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-[73px] mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://capitalinvestmentt.com/php/controler/users/login.php"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                    <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/dollar-symbol.svg')] text-[13.7px] bg-stone-50 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                    </div>
                                </picture>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px]">
                        <div className="text-[13.7px] caret-transparent h-[50px] leading-[18.495px] max-h-2.5 break-words md:text-[15px] md:leading-[22.5px] md:max-h-none"></div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                        <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                            <Link
                                to="/"
                                title="Inicio"
                                className="text-orange-500 text-[13.7px] items-center shadow-[rgb(235,129,19)_0px_0px_0px_2px_inset] box-border caret-transparent inline-flex justify-center leading-[18.495px] break-words w-full px-[12.33px] py-[4.11px] rounded-[2.74px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] md:rounded-[3px] hover:text-white hover:bg-orange-500 hover:border-white"
                                >
                                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                    AGENDA TU CITA{" "}
                                </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="relative text-[13.7px] border-b-neutral-500 border-l-neutral-500 border-r-neutral-500 border-t-neutral-500/20 box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] border-t md:text-[15px] md:leading-[22.5px]">
                    <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
                    <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                            <h2 className="text-orange-500 text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words text-center mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mb-[7.65px]">
                            Últimos Artículos
                            </h2>
                            <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                            Manténgase informado y tome el control de sus finanzas
                            con el apoyo de los expertos de
                            <strong className="text-[13.7px] font-bold caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]">
                                {" "}
                                CAPITAL GROUP RECOVERY
                            </strong>
                            . Visite nuestro blog con frecuencia para descubrir
                            nuevas actualizaciones y recursos valiosos
                            </p>
                            <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                             
                            </p>
                        </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px]">
                        <div className="text-[13.7px] caret-transparent h-[5px] leading-[18.495px] max-h-2.5 break-words md:text-[15px] md:leading-[22.5px] md:max-h-none"></div>
                        </div>
                        <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mt-[13.7px] mx-0 scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:mt-[15px] md:-mx-3">
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[33.3333%] md:mb-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-full mx-auto md:text-[15px] md:float-left md:w-[339px] md:mx-0">
                                <a
                                href="https://primary.jwwb.nl/unsplash/5U_28ojjgms.jpg"
                                title="Ver versión más grande"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 break-words w-full overflow-hidden pt-[100%] rounded-[5.48px] md:text-[15px] md:rounded-md">
                                    <img
                                    alt=""
                                    src="https://c.animaapp.com/mialo3w6Xgfv7Y/assets/9.jpg"
                                    sizes="auto, min(100vw, 339px), 100vw"
                                    className="absolute text-[13.7px] aspect-[auto_800_/_800] caret-transparent h-full max-w-full object-cover break-words w-full rounded-[5.48px] inset-0 md:text-[15px] md:rounded-md"
                                    />
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <h2 className="text-orange-500 text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words text-center mt-[16.16px] mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mt-[20.4px] md:mb-[7.65px]">
                                <a
                                    href="https://temp-dbfccddjkiaksvriohsb.webadorsite.com/"
                                    className="text-[20.2px] caret-transparent leading-[22.22px] break-words underline md:text-[25.5px] md:leading-[28.05px] hover:text-orange-400 hover:border-orange-400"
                                >
                                    Estrategias de Negociación para la Recuperación
                                    de Activos
                                </a>
                                </h2>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                Conozca las técnicas de negociación más efectivas
                                que empleamos para resolver casos complejos de
                                manera rápida y eficiente. La negociación efectiva
                                es …
                                </p>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                                <a
                                href="/contacto"
                                title="Contacto"
                                className="text-white text-[13.7px] items-center bg-orange-500 caret-transparent inline-flex justify-center leading-[18.495px] outline-orange-500 break-words px-[12.33px] py-[4.11px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] hover:bg-orange-400 hover:outline-white"
                                >
                                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                    Escribe aquí{" "}
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[33.3333%] md:my-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-full mx-auto md:text-[15px] md:float-left md:mx-0">
                                <a
                                href="https://primary.jwwb.nl/unsplash/QckxruozjRg.jpg"
                                title="Ver versión más grande"
                                className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
                                >
                                <picture className="relative text-[13.7px] caret-transparent block h-0 break-words w-full overflow-hidden pt-[100%] rounded-[5.48px] md:text-[15px] md:rounded-md">
                                    <img
                                    alt=""
                                    src="https://c.animaapp.com/mialo3w6Xgfv7Y/assets/10.jpg"
                                    sizes="auto, min(100vw, 1200px), 100vw"
                                    className="absolute text-[13.7px] aspect-[auto_800_/_800] caret-transparent h-full max-w-full object-cover break-words w-full rounded-[5.48px] inset-0 md:text-[15px] md:rounded-md"
                                    />
                                </picture>
                                </a>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <h2 className="text-orange-500 text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words text-center mt-[16.16px] mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mt-[20.4px] md:mb-[7.65px]">
                                <a
                                    href="https://temp-dbfccddjkiaksvriohsb.webadorsite.com/"
                                    className="text-[20.2px] caret-transparent leading-[22.22px] break-words underline md:text-[25.5px] md:leading-[28.05px] hover:text-orange-400 hover:border-orange-400"
                                >
                                    Las Principales Tendencias en la Recuperación de
                                    Deudas Comerciales
                                </a>
                                </h2>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                Entérese de las prácticas más recientes que están
                                transformando el panorama de la recuperación de
                                deudas y cómo puede aplicarlas para beneficiar …
                                </p>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                                <a
                                href="/contacto"
                                title="Contacto"
                                className="text-white text-[13.7px] items-center bg-orange-500 caret-transparent inline-flex justify-center leading-[18.495px] outline-orange-500 break-words px-[12.33px] py-[4.11px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] hover:bg-orange-400 hover:outline-white"
                                >
                                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                    Escribe aquí{" "}
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[33.3333%] md:mt-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-full mx-auto md:text-[15px] md:float-left md:mx-0">
                                <picture className="relative text-[13.7px] caret-transparent block h-0 break-words w-full pt-[100%] md:text-[15px]">
                                <img
                                    alt=""
                                    src="https://c.animaapp.com/mialo3w6Xgfv7Y/assets/11.jpg"
                                    sizes="auto, min(100vw, 1200px), 100vw"
                                    className="absolute text-[13.7px] aspect-[auto_800_/_800] caret-transparent h-full max-w-full object-cover object-[14%_50%] break-words w-full inset-0 md:text-[15px]"
                                />
                                </picture>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <h2 className="text-orange-500 text-[20.2px] font-bold caret-transparent leading-[22.22px] break-words text-center mt-[16.16px] mb-[6.06px] md:text-[25.5px] md:leading-[28.05px] md:mt-[20.4px] md:mb-[7.65px]">
                                <a
                                    href="https://temp-dbfccddjkiaksvriohsb.webadorsite.com/"
                                    className="text-[20.2px] caret-transparent leading-[22.22px] break-words underline md:text-[25.5px] md:leading-[28.05px] hover:text-orange-400 hover:border-orange-400"
                                >
                                    Cómo Recuperar Activos de Manera Eficiente
                                </a>
                                </h2>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                En este artículo, exploramos los pasos esenciales
                                para maximizar la recuperación de activos y
                                minimizar las pérdidas. Descubra cómo nuestros
                                expertos pueden …
                                </p>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                                <a
                                href="/contacto"
                                title="Contacto"
                                className="text-white text-[13.7px] items-center bg-orange-500 caret-transparent inline-flex justify-center leading-[18.495px] outline-orange-500 break-words px-[12.33px] py-[4.11px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] hover:bg-orange-400 hover:outline-white"
                                >
                                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                    Escribe aquí{" "}
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="relative text-white text-[13.7px] bg-black box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                    <div className="relative text-[13.7px] caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]">
                    <img
                        src="https://c.animaapp.com/mialo3w6Xgfv7Y/assets/omDNGQ8E9rg.jpg"
                        alt=""
                        className="absolute text-[13.7px] aspect-[auto_1920_/_1280] caret-transparent h-full leading-[18.495px] object-cover break-words w-full inset-0 md:text-[15px] md:leading-[22.5px]"
                    />
                    <div className="absolute text-[13.7px] bg-black/30 caret-transparent h-full leading-[18.495px] break-words pointer-events-none w-full inset-0 md:text-[15px] md:leading-[22.5px]"></div>
                    </div>
                    <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
                    <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
                        <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mx-0 scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:-mx-3">
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mb-[13.7px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-6/12 md:mb-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent leading-[0px] max-w-full break-words w-[34px] mx-auto md:text-[15px]">
                                <picture className="relative text-[13.7px] caret-transparent block h-0 break-words w-full pt-[100%] md:text-[15px]">
                                <div className="absolute text-[13.7px] caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/map-marker.svg')] text-[13.7px] bg-orange-500 caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                </div>
                                </picture>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                                <strong className="text-[13.7px] font-bold caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]">
                                    Dirección
                                </strong>
                                </p>
                                <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                                <span className="text-[13.7px] caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]">
                                    Reino Unido es 12 Endeavour Square, London E20
                                    1JN.
                                </span>
                                <span className="text-[13.7px] caret-transparent leading-[18.495px] break-words md:text-[15px] md:leading-[22.5px]"></span>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full mt-[41.1px] px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-6/12 md:mt-0 md:px-3">
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px]">
                            <div className="text-[13.7px] caret-transparent h-[28.5px] leading-[18.495px] max-h-2.5 break-words md:text-[15px] md:leading-[22.5px] md:max-h-none"></div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
                            <div className="relative text-[13.7px] caret-transparent leading-[0px] max-w-full break-words w-[43px] mx-auto md:text-[15px]">
                                <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
                                <div className="absolute text-[13.7px] bg-orange-500 caret-transparent h-full object-cover break-words w-full inset-0 md:text-[15px]">
                                    <div className="[mask-image:url('https://assets.jwwb.nl/assets/img/icons/thumbs-up-hand-symbol.svg')] text-[13.7px] bg-black caret-transparent h-full [mask-repeat:no-repeat] [mask-size:50%] break-words w-full [mask-position:50%] md:text-[15px]"></div>
                                </div>
                                </picture>
                            </div>
                            </div>
                            <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
                            <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
                                <a
                                href="/contacto"
                                title="Contacto"
                                className="text-orange-500 text-[13.7px] items-center shadow-[rgb(235,129,19)_0px_0px_0px_2px_inset] box-border caret-transparent inline-flex justify-center leading-[18.495px] break-words w-full px-[12.33px] py-[4.11px] rounded-[2.74px] md:text-[15px] md:leading-[22.5px] md:px-[13.5px] md:py-[4.5px] md:rounded-[3px] hover:text-white hover:bg-orange-500 hover:border-white"
                                >
                                <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-px break-words md:text-[15px] md:leading-[22.5px]">
                                    CONECTAR{" "}
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>
        </div>
    );
};
