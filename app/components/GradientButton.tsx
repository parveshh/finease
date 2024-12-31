import { ButtonProps,Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
interface GradientButtonProps extends ButtonProps {
    isLoading?: boolean
}
export default function GradientButton(props: GradientButtonProps) {
    const {children, className, variant, isLoading, ...rest} = props
    
    return (
        <Button disabled={isLoading} className={ variant ? className : cn("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white text-lg font-semibold px-10",className)} {...rest}>
          <div className="flex gap-2 items-center justify-center">
            {isLoading && <Loader2 className="animate-spin" />}
            <span>{children}</span>
          </div>
        </Button>
    );
}