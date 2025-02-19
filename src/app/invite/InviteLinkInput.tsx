'use client'

import { InputField, InputIcon, InputRoot } from '@/components/Input'
import IconButton from '@/components/icon-button'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
    inviteLink: string
}

export function InviteLinkInput(props: InviteLinkInputProps) {
    function copyToClipboard() {
        navigator.clipboard.writeText(props.inviteLink)
    }

    return (
        <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>

        <InputField
          readOnly
          defaultValue={props.inviteLink}
        />

        <IconButton className="-mr-2" onClick={copyToClipboard}>
          <Copy className="size-5" />
        </IconButton>
      </InputRoot>
    )
}