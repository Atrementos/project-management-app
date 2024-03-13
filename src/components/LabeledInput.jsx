import { forwardRef } from "react";

const LabeledInput = forwardRef(({ label, InputTag, ...props }, ref) => {
    return (<span className="w-full">
        <label className="uppercase text-neutral-700 text-start font-semibold block mb-2">{label}</label>
        <InputTag className="block bg-neutral-200 w-full mb-2 p-1" ref={ref} {...props} />
    </span>);
});

export default LabeledInput;