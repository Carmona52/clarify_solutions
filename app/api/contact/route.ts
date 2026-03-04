import {NextResponse} from 'next/server';
import {Resend} from 'resend';
import {createClient} from '@supabase/supabase-js';

const resend = new Resend('re_HZYCY1Hw_Mn4v1ytcEjHiRcXtQ6sktzbi');
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
    const body = await req.json();
    const {name, email, empresa, message} = body;


    try {
        const {error: dbError} = await supabase
            .from('emails-recived')
            .insert([{name, email, empresa, message}]);

        if (dbError) throw dbError;


        await resend.emails.send({
            from: 'Clarify Solutions <test@clarify.mx>',
            to: 'c6760434@gmail.com',
            subject: `Nuevo Lead: ${name}`,
            html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Empresa: ${empresa}</p><p>Mensaje: ${message}</p>`,
        });
        await resend.emails.send({
            from: 'Clarify Solutions <test@clarify.mx>',
            to: email,
            subject: 'Recibimos tu mensaje - Clarify Solutions',
            html: `<h1>¡Hola ${name}!</h1><p>Gracias por contactarnos. Pronto te escribiremos.</p>`,
        });


        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({error: 'Error al procesar el contacto'}, {status: 500});
    }
}