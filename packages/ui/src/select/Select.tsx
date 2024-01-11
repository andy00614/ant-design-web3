import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { classNames } from '../utils';

export type TSelectOption = { label: string; value: string };
interface SelectProps {
  prefix?: () => React.ReactNode;
  options: TSelectOption[];
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ options, onChange, value, prefix, className }) => {
  const selectLabel = options.find((option) => option.value === value)?.label || '';
  return (
    <Listbox
      value={value}
      onChange={(_value: string) => {
        const target = options.find((option) => option.value === _value);
        if (target) {
          onChange(target.value);
        }
      }}
    >
      <div className="relative mt-1">
        <Listbox.Button
          className={classNames(
            className,
            'relative flex w-full cursor-default items-center rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6',
          )}
        >
          {prefix && prefix()}
          <span className="block truncate">{selectLabel}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((item) => (
              <Listbox.Option
                key={item.value}
                className={({ active }) =>
                  classNames(
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  )
                }
                value={item.value}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {item.label}
                    </span>
                    {/* {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null} */}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
