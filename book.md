---
layout: default
title: Book
permalink: /book/
---

<div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Book Your Pizza Catering Event</h2>
        <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Ready to bring authentic Neapolitan pizza to your event? Fill out the form below and we'll get back to you within 24 hours to discuss your catering needs.
        </p>
        
        <div class="bg-[#262626] p-8 rounded-lg mx-4 my-6">
            <form class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">First Name *</label>
                        <input type="text" required class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                    </div>
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Last Name *</label>
                        <input type="text" required class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Email *</label>
                        <input type="email" required class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                    </div>
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Phone Number</label>
                        <input type="tel" class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Event Date *</label>
                        <input type="date" required class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                    </div>
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Number of Guests *</label>
                        <select required class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                            <option value="">Select guest count</option>
                            <option value="10-25">10-25 guests</option>
                            <option value="25-50">25-50 guests</option>
                            <option value="50-75">50-75 guests</option>
                            <option value="75-100">75-100 guests</option>
                            <option value="100-150">100-150 guests</option>
                            <option value="150+">150+ guests</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Event Type</label>
                    <select class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="family">Family Reunion</option>
                        <option value="graduation">Graduation Party</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Event Location</label>
                    <input type="text" placeholder="Address or general area" class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white">
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Setup Location</label>
                    <div class="space-y-2">
                        <label class="flex items-center text-white">
                            <input type="radio" name="setup" value="indoor" class="mr-2">
                            Indoor (we need access to power)
                        </label>
                        <label class="flex items-center text-white">
                            <input type="radio" name="setup" value="outdoor" class="mr-2">
                            Outdoor (we bring our own power)
                        </label>
                        <label class="flex items-center text-white">
                            <input type="radio" name="setup" value="either" class="mr-2">
                            Either works
                        </label>
                    </div>
                </div>
                
                <div>
                    <label class="block text-white text-sm font-medium mb-2">Additional Details</label>
                    <textarea rows="4" placeholder="Tell us about your event, any dietary restrictions, preferred pizza styles, or special requests..." class="w-full px-4 py-3 bg-[#1a1a1a] border border-[#363636] rounded-lg text-white focus:outline-none focus:border-white resize-none"></textarea>
                </div>
                
                <div class="flex justify-center pt-4">
                    <button type="submit" class="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-black text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#333] transition-colors">
                        <span class="truncate">Send Booking Request</span>
                    </button>
                </div>
            </form>
        </div>
        
        <h3 class="text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Happens Next?</h3>
        <div class="px-4 space-y-4">
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">1</span>
                </div>
                <div>
                    <h4 class="text-white font-semibold">We'll Contact You</h4>
                    <p class="text-[#adadad] text-sm">Within 24 hours, we'll reach out to discuss your event details and answer any questions.</p>
                </div>
            </div>
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">2</span>
                </div>
                <div>
                    <h4 class="text-white font-semibold">Menu Planning</h4>
                    <p class="text-[#adadad] text-sm">We'll work together to create the perfect 4-5 pizza menu for your guests.</p>
                </div>
            </div>
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-sm font-bold">3</span>
                </div>
                <div>
                    <h4 class="text-white font-semibold">Event Day</h4>
                    <p class="text-[#adadad] text-sm">We arrive, set up, serve fresh pizzas all evening, and handle cleanup. You just enjoy!</p>
                </div>
            </div>
        </div>
        
        <div class="bg-[#262626] p-6 rounded-lg mx-4 my-6">
            <h3 class="text-white text-lg font-bold mb-3">Quick Facts</h3>
            <ul class="text-[#adadad] space-y-2">
                <li>• All-you-can-eat style service</li>
                <li>• Fresh pizzas every 2-3 minutes</li>
                <li>• Can serve up to 150 guests</li>
                <li>• Only need 10x10 space</li>
                <li>• Complete setup and breakdown included</li>
                <li>• All ingredients imported from Italy</li>
            </ul>
        </div>
    </div>
</div>
