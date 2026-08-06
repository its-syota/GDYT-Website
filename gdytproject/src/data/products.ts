import Sample from '../assets/Sample.png'

// Shoes
import retroRunner from '../assets/retro runner.webp'
import cloudStep from '../assets/cloud step.webp'
import streetLowTop from '../assets/street low top.webp'
import trailblazerBoot from '../assets/trailblazer.webp'
import canvasClassic from '../assets/canvas classic.png'
import courtVision from '../assets/court vision.png'
import suedeTrainer from '../assets/suede trainer.png'
import highTopFlex from '../assets/high top flex.webp'
import slipOnComfort from '../assets/slip on comfort.webp'
import marathonPro from '../assets/marathon pro.webp'

// Tops
import essentialTee from '../assets/essential tee.png'
import oversizedGraphic from '../assets/oversized graphic.png'
import ribbedLongSleeve from '../assets/ribbed long sleeve.png'
import flannel from '../assets/flannel.webp'
import pulloverHoodie from '../assets/pullover hoodie.png'
import zipupWindbreaker from '../assets/zipup windbreaker.webp'
import croppedTank from '../assets/cropped tank.webp'
import stripedHenley from '../assets/stripped henley.webp'
import denimJacket from '../assets/denim jacket.png'
import varsityBomber from '../assets/varsity bomber.png'
import meshAthleticTee from '../assets/mesh athletic tee.png'
import turtleneckSweater from '../assets/turtleneck sweater.webp'
import buttonUpLinenShirt from '../assets/button up linen shirt.webp'
import quarterZipPullover from '../assets/quarter zip pullover.webp'

// Pants
import relaxedFitJeans from '../assets/relaxed fit jeans.jpg'
import slimChino from '../assets/slim chino.jpg'
import cargoUtilityPants from '../assets/cargo utility pants.jpg'
import trackJoggers from '../assets/track joggers.jpg'
import wideLegTrousers from '../assets/wide leg trousers.jpg'
import distressedDenim from '../assets/distressed denim.jpg'
import corduroyStraightLeg from '../assets/corduroy straight leg.webp'

// Accessories
import wovenLeatherBelt from '../assets/woven leather belt.jpg'
import snapbackCap from '../assets/snapback cap.jpg'
import chainlinkNecklace from '../assets/chainlink necklace.jpg'
import canvasCrossbodyBag from '../assets/canvas crossbody bag.jpg'
import wrapAroundSportGlasses from '../assets/wrap around sport glasses.jpg'

export interface Product {
    image: string
    title: string
    description: string
    price: string
}

// Swap the `image` on any entry below to change what shows on that page —
// import your own file at the top (like Sample above) and assign it here.

export const shoesProducts: Product[] = [
    { image: retroRunner, title: 'Retro Runner', description: 'Classic low-top sneaker with a cushioned sole for all-day comfort.', price: '$64.99' },
    { image: cloudStep, title: 'Cloud Step Sneaker', description: 'Lightweight knit upper built for everyday wear.', price: '$89.99' },
    { image: streetLowTop, title: 'Street Low Top', description: 'Minimal court-style sneaker with a durable rubber outsole.', price: '$54.99' },
    { image: trailblazerBoot, title: 'Trail Blazer Boot', description: 'Water-resistant boot made for rougher terrain.', price: '$109.99' },
    { image: canvasClassic, title: 'Canvas Classic', description: 'Timeless canvas sneaker that pairs with anything.', price: '$39.99' },
    { image: courtVision, title: 'Court Vision', description: 'Retro basketball silhouette with a padded collar.', price: '$74.99' },
    { image: suedeTrainer, title: 'Suede Trainer', description: 'Soft suede upper with a vintage running profile.', price: '$69.99' },
    { image: highTopFlex, title: 'High Top Flex', description: 'Ankle-support high top with flexible sole cushioning.', price: '$84.99' },
    { image: slipOnComfort, title: 'Slip-On Comfort', description: 'No-lace slip-on for quick, easy wear.', price: '$44.99' },
    { image: marathonPro, title: 'Marathon Pro', description: 'Performance running shoe with responsive foam midsole.', price: '$119.99' },
]

export const topsProducts: Product[] = [
    { image: essentialTee, title: 'Essential Crewneck Tee', description: 'Soft cotton tee that fits into any rotation.', price: '$19.99' },
    { image: oversizedGraphic, title: 'Oversized Graphic Tee', description: 'Relaxed fit tee with a bold front print.', price: '$24.99' },
    { image: ribbedLongSleeve, title: 'Ribbed Long Sleeve', description: 'Fitted ribbed knit for layering or wearing alone.', price: '$29.99' },
    { image: flannel, title: 'Classic Flannel Shirt', description: 'Brushed flannel button-up in a timeless plaid.', price: '$44.99' },
    { image: pulloverHoodie, title: 'Pullover Hoodie', description: 'Heavyweight fleece hoodie with a kangaroo pocket.', price: '$49.99' },
    { image: zipupWindbreaker, title: 'Zip-Up Windbreaker', description: 'Lightweight shell built to cut the wind.', price: '$54.99' },
    { image: croppedTank, title: 'Cropped Tank', description: 'Cropped fit tank made for warm days.', price: '$17.99' },
    { image: stripedHenley, title: 'Striped Henley', description: 'Button-placket henley with a soft striped knit.', price: '$27.99' },
    { image: denimJacket, title: 'Denim Jacket', description: 'Mid-wash denim jacket with a classic collar.', price: '$59.99' },
    { image: varsityBomber, title: 'Varsity Bomber', description: 'Ribbed-trim bomber with a satin finish.', price: '$69.99' },
    { image: meshAthleticTee, title: 'Mesh Athletic Tee', description: 'Breathable mesh panels for training days.', price: '$22.99' },
    { image: turtleneckSweater, title: 'Turtleneck Sweater', description: 'Fine-knit turtleneck for a clean layered look.', price: '$39.99' },
    { image: buttonUpLinenShirt, title: 'Button-Up Linen Shirt', description: 'Breathable linen blend for warm-weather wear.', price: '$34.99' },
    { image: quarterZipPullover, title: 'Quarter-Zip Pullover', description: 'Textured knit pullover with a half-zip collar.', price: '$44.99' },
]

export const pantsProducts: Product[] = [
    { image: relaxedFitJeans, title: 'Relaxed Fit Jeans', description: 'Roomy through the seat and thigh with a straight leg.', price: '$49.99' },
    { image: slimChino, title: 'Slim Chino', description: 'Tailored chino that dresses up or down easily.', price: '$44.99' },
    { image: cargoUtilityPants, title: 'Cargo Utility Pants', description: 'Multi-pocket cargo built for everyday carry.', price: '$54.99' },
    { image: trackJoggers, title: 'Track Joggers', description: 'Tapered jogger with an elastic cuff and drawstring waist.', price: '$39.99' },
    { image: wideLegTrousers, title: 'Wide Leg Trouser', description: 'Flowy wide-leg cut for a relaxed silhouette.', price: '$47.99' },
    { image: distressedDenim, title: 'Distressed Denim', description: 'Straight leg denim with light distressing throughout.', price: '$52.99' },
    { image: corduroyStraightLeg, title: 'Corduroy Straight Leg', description: 'Soft-wale corduroy pant with a straight fit.', price: '$49.99' },
]

export const accessoriesProducts: Product[] = [
    { image: wovenLeatherBelt, title: 'Woven Leather Belt', description: 'Hand-woven leather belt with a brushed buckle.', price: '$29.99' },
    { image: snapbackCap, title: 'Classic Snapback Cap', description: 'Structured five-panel cap with an adjustable snap.', price: '$24.99' },
    { image: chainlinkNecklace, title: 'Chain Link Necklace', description: 'Bold stainless steel chain that layers well.', price: '$19.99' },
    { image: canvasCrossbodyBag, title: 'Canvas Crossbody Bag', description: 'Compact crossbody built for daily essentials.', price: '$34.99' },
    { image: wrapAroundSportGlasses, title: 'Sport Wrap Sunglasses', description: 'Wrap-frame sunglasses with UV-protective lenses.', price: '$22.99' },
]
