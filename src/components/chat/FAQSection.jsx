import {
    Shield,
    Package,
    BadgeDollarSign,
    ShieldCheck,
    Wrench,
    RotateCcw
} from "lucide-react";

const faqs = [

    {
        icon: Shield,
        label: "Best for Security",
        question: "Which product is best for security purpose?"
    },

    {
        icon: Package,
        label: "Show Products",
        question: "List all products"
    },

    {
        icon: BadgeDollarSign,
        label: "Pricing",
        question: "Show pricing of all products"
    },

    {
        icon: ShieldCheck,
        label: "Warranty",
        question: "Explain warranty policy"
    },

    {
        icon: Wrench,
        label: "Installation",
        question: "Explain installation guide"
    },

    {
        icon: RotateCcw,
        label: "Return Policy",
        question: "Explain refund and return policy"
    }

];

export default function FAQSection({

    onQuestion

}){

    return(

        <div className="border-t border-slate-800 bg-[#111827] px-8 py-3">

            <div className="text-sm text-slate-400 font-semibold mb-2">

                Frequently Asked Questions

            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar">

                {

                    faqs.map((faq,index)=>{

                        const Icon=faq.icon;

                        return(

                            <button

                                key={index}

                                onClick={()=>onQuestion(faq.question)}

                                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 hover:bg-blue-600 hover:border-blue-600 transition px-4 py-2 text-sm"

                            >

                                <Icon size={16}/>

                                {faq.label}

                            </button>

                        )

                    })

                }

            </div>

        </div>

    )

}