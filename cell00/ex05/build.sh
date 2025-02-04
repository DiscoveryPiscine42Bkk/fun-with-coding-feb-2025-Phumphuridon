if [ $# -eq 0 ]
then
        echo 'No arguments supplied'
fi

for args in "$@"
do
        mkdir "ex$args"
done
