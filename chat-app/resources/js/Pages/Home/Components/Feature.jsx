import {ChatBubbleBottomCenterTextIcon , FingerPrintIcon, PhotoIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comunicazione istantanea',
    description:
      'Messaggistica istantanea con amici e familiari in qualsiasi momento e da qualsiasi luogo.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Interfaccia intuitiva',
    description:
      "Naviga facilmente attraverso l'app grazie a un'interfaccia utente intuitiva e user-friendly.",
    icon: UserIcon,
  },
  {
    name: 'File multimediali',
    description:
      'Invia e ricevi foto, video e messaggi vocali per condividere momenti significativi con chi ami',
    icon: PhotoIcon,
  },
  {
    name: 'Privacy al primo posto',
    description:
      'Le tue chat in InstaTalk sono al sicuro grazie alla crittografia end-to-end',
    icon: FingerPrintIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32" id='functions'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Funzioni
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}