import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ContactAgentForm() {
    return (
        <div className="bg-white p-8 rounded-3xl border shadow-lg sticky top-24">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                        alt="Agent"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Sarah Jenkins</h3>
                    <p className="text-sm text-gray-500">Senior Real Estate Agent</p>
                    <div className="flex gap-2 mt-1">
                        <Badge variant="secondary" className="text-[10px]">Top Rated</Badge>
                    </div>
                </div>
            </div>

            <form className="space-y-4">
                <div>
                    <Input placeholder="Full Name" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                    <Input placeholder="Email Address" type="email" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                    <Input placeholder="Phone Number" type="tel" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                    <textarea
                        className="w-full min-h-[120px] rounded-2xl border border-input bg-gray-50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="I am interested in this property..."
                    ></textarea>
                </div>

                <Button className="w-full rounded-xl bg-green-700 hover:bg-green-800 h-12 text-base">
                    Send Message
                </Button>
            </form>

            <p className="text-xs text-center text-gray-400 mt-6">
                By sending, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    )
}
